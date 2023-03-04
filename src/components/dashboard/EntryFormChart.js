import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useGetList, useTranslate } from "react-admin";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { subDays } from "date-fns";
import { useSelector } from "react-redux";
import { dateFormat,jToM } from "@/functions";
import EntryFormChartFilters from "#c/components/dashboard/EntryFormChartFilters";
import API from "#c/functions/API";
const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);
const dateFormatter = (date) => {
  return dateFormat(new Date(date), "YYYY/MM/DD");
};
const dateFormatterDashed = (date) => {
  return dateFormat(new Date(date), "YYYY-MM-DD");
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
  const [forms,setForms] = React.useState([])
  const [formiIdFilter,setFormIdFilter] = React.useState('')
  const [startDateFilter,setStartDateFilter] = React.useState(0)
  const [endDateFilter,setEndDateFilter] = React.useState(0)
  let filterListData = [];

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
  console.log('useEffectRendering');
    setForms(getRevenuePerDay(entries))
},[])


  const handleChangeFormFilter = (formID) =>{
    setFormIdFilter(formID)
    filterListData =[];
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



  const getRevenuePerDateFilter = (entriessss,dateCallBack,type) => {
    let arrayFilter = [];

    // console.log('time-->'+type,dateCallBack);
    // console.log('startDate',startDateFilter);
    // console.log('endDateFilter',endDateFilter);
    const daysWithRevenueEntries = aggregateEntriesByDay(entriessss);
    if(type === 'start'){
      setStartDateFilter(dateCallBack)
       lastMonthDays.map(date => {
         if(startDateFilter > 1){
           if(date.getTime() > startDateFilter.getTime()){
             arrayFilter.push({
               date: date.getTime(),
               "total": daysWithRevenueEntries[dateFormat(date, "YYYY/MM/DD")] || 0
             });
           }
         }else{

           if(date.getTime() > dateCallBack.getTime()){
             arrayFilter.push({
               date: date.getTime(),
               "total": daysWithRevenueEntries[dateFormat(date, "YYYY/MM/DD")] || 0
             });
           }
         }


      })


    };
    if(type === 'end'){
      setEndDateFilter(dateCallBack)
      lastMonthDays.map(date => {
        if(endDateFilter > 1){
          if(date.getTime() > startDateFilter.getTime() && date.getTime() < endDateFilter.getTime()){
            arrayFilter.push ({
              date: date.getTime(),
              "total": daysWithRevenueEntries[dateFormat(date, "YYYY/MM/DD")] || 0
            });
          }
        }else{
          if(date.getTime() > startDateFilter.getTime() && date.getTime() < dateCallBack.getTime()){
            arrayFilter.push ({
              date: date.getTime(),
              "total": daysWithRevenueEntries[dateFormat(date, "YYYY/MM/DD")] || 0
            });
          }
        }

      })
    }

    if(arrayFilter.length > 0){
      setForms(arrayFilter);
    }else{
      setForms(getRevenuePerDay(entries))
    }
  };




  const startFunction = (start) =>{
    setStartDateFilter(start)
    let filterListDataStart = [];
    API.get("/entry/0/10000?date_gte="+ jToM(dateFormatter(start)) + '&_order=ASC').then(({ data = {} }) => {
      if (data) {
        if(formiIdFilter !== ''){
          if(data){
            data.forEach((ent)=>{
              if(ent.form._id === formiIdFilter){
                filterListDataStart.push(ent)
              }
            })
            getRevenuePerDateFilter(filterListDataStart,start,'start');
          }
        }else{
          getRevenuePerDateFilter(entries,start,'start');
        }
      } else {
        getRevenuePerDateFilter(entries,start,'start');
      }
    });


  }//endFunction
  const endFunction = (end) =>{
    setEndDateFilter(end)
    let filterListDataEnd = [];
    API.get("/entry/0/10000?date_gte="+ jToM(dateFormatter(startDateFilter)) +'&date_lte='+ jToM(dateFormatter(end)) + '&_order=ASC').then(({ data = {} }) => {
      if (data) {
        if(formiIdFilter !== ''){
          if(data){
            data.forEach((ent)=>{
              if(ent.form._id === formiIdFilter){
                filterListDataEnd.push(ent)
              }
            })
          }
          getRevenuePerDateFilter(filterListDataEnd,end,'end')
        }else{
          getRevenuePerDateFilter(entries,end,'end');
        }
      }else{
        getRevenuePerDateFilter(entries,end,'end');
      }
    });

  }//endFunction


  return (
    <Card className={"width1000"} style={{marginTop:'20px'}}>
      <CardHeader title={translate(props.title)}/>
      <EntryFormChartFilters handleChangeForm={handleChangeFormFilter} handlerStart={startFunction} handlerEnd={endFunction}  model={'form'}/>
      <CardContent>
        <div style={{ height: 300 }} className={"entry-chart"}>
          {
            forms ? (
              <ResponsiveContainer width="100%" height="100%">
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
            </ResponsiveContainer>
            ):('Nothing To Show')
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

export default EntryFormChart
