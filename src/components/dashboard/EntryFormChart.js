import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useGetList, useTranslate } from "react-admin";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { subDays } from "date-fns";
import { useSelector } from "react-redux";
import { dateFormat } from "@/functions";
import EntryFormChartFilters from "#c/components/dashboard/EntryFormChartFilters";
const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);
const dateFormatter = (date) => {
  return dateFormat(new Date(date), "YYYY/MM/DD");
};
const aggregateEntriesByDay = (entry = []) => {

  return entry.reduce((acc, curr) => {
    const day = dateFormat(curr.createdAt, "YYYY/MM/DD");

    if (!acc[day]) {
      acc[day] = 0;
    }
    acc[day] += 1 || 0;
    return acc;
  }, {});
};
const getRevenuePerDay = (entries) => {
  const daysWithRevenueEntries = aggregateEntriesByDay(entries);
  return lastMonthDays.map(date => {
    return ({
      date: date.getTime(),
      "total": daysWithRevenueEntries[dateFormat(date, "YYYY/MM/DD")] || 0
    });
  });
};

const EntryFormChart = (props) => {
  const [forms,setForms] = React.useState('')
  const translate = useTranslate();
  const classes = useStyles();
  const { title } = props;
  const aMonthAgo = subDays(new Date(), 30);
  aMonthAgo.setDate(aMonthAgo.getDate() - 30);
  aMonthAgo.setHours(0);
  aMonthAgo.setMinutes(0);
  aMonthAgo.setSeconds(0);
  aMonthAgo.setMilliseconds(0);
  const themeData = useSelector((st) => st.themeData);
  const { isLoading: loaded, data: entries } = useGetList(props.model,
    {
        pagination: { page: 1, perPage: 1000 }
       }
    );

React.useEffect(()=>{
     setForms(getRevenuePerDay(entries))
},[])



const filterListData = [];
  const handleChangeFormFilter = (formID) =>{
    if(formID ==='all'){
      setForms(getRevenuePerDay(entries))
    }else{
      if(entries){
        entries.forEach((ent)=>{
          if(ent.form._id === formID){
            filterListData.push(ent)
          }
        })
      }
      setForms(getRevenuePerDay(filterListData));
    }

  }
  const handleChangeDateFilter = (date,type) =>{
    console.log('returnDateForFilter',date);
    // if(date){
    //   if(entries){
    //     entries.forEach((ent)=>{
    //       if(ent.form._id === formID){
    //         filterListData.push(ent)
    //       }
    //     })
    //   }
    //   setForms(getRevenuePerDay(filterListData));
    // }

  }





  return (
    <Card className={"width1000"} style={{marginTop:'20px'}}>
      <CardHeader title={translate(props.title)}/>
      <EntryFormChartFilters handleChangeForm={handleChangeFormFilter} handleChangeDate={handleChangeDateFilter} model={'form'}/>
      <CardContent>
        <div style={{ height: 300 }} className={"entry-chart"}>
          {
            forms ? (<ResponsiveContainer width="100%" height="100%">
              <LineChart data={forms} width={1000}>

                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis
                  name="date"
                  dataKey="date"
                  // label={'روز'}
                  // type="number"
                  // scale="time"
                  // domain={[
                  //   addDays(aMonthAgo, 1).getTime(),
                  //   new Date().getTime(),
                  // ]}
                  tickFormatter={dateFormatter}
                />
                <YAxis/>
                <Tooltip
                  cursor={{ strokeDasharray: "10 10" }}
                  formatter={(value, name, props) => {
                    let { payload } = props;
                    let { date } = payload;
                    if (value)
                      return <div>
                        <div>{dateFormatter(date)}</div>
                        <div>{value + " عدد" }</div>
                      </div>;
                    else
                      return "0";
                  }}
                  labelFormatter={(label) => {
                    return dateFormatter(label);
                  }}
                />
                <Legend/>
                <Line type="monotone" dataKey={("total")} label={translate("total")} stroke="#8884d8"  strokeWidth={2}/>
                {/*<Line type="monotone" dataKey={("total")} label={translate("total")} stroke="#8884d8"  strokeWidth={2}/>*/}
                {/*<Line type="monotone" dataKey={("complete")} label={translate("pos.OrderStatus.complete")} stroke="#31bd58"  strokeWidth={2}/>*/}
                {/*<Line type="monotone" dataKey={("paid")} label={translate("pos.OrderStatus.paid")} stroke="#1875d2"  strokeWidth={2}/>*/}
              </LineChart>
            </ResponsiveContainer>):('Nothing To Show')
          }

        </div>
      </CardContent>
    </Card>

  );
};

const useStyles = makeStyles(theme => ({
  link: {
    borderRadius: 0
  },
  linkContent: {
    color: theme.palette.primary.main
  }
}));

export default EntryFormChart;