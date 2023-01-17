import * as React from "react";
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomerIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
import { useGetList, useTranslate } from "react-admin";
import {Area, AreaChart, CartesianGrid, BarChart,Legend,Bar,ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';
import {Card, CardContent, CardHeader} from '@mui/material';
import {addDays, format, subDays} from 'date-fns';
import { useSelector } from "react-redux";

import CardWithIcon from "./CardWithIcon";
// import {Customer} from '../types';

import {dateFormat} from '@/functions';

const lastDay = new Date();
const lastMonthDays = Array.from({length: 30}, (_, i) => subDays(lastDay, i));
// console.log('lastMonthDays', lastMonthDays);
const aMonthAgo = subDays(new Date(), 30);
const dateFormatter = (date) => {
  // console.log('new Date(date).toLocaleDateString()',dateFormat(new Date(date),'YYYY/MM/DD'));
  return dateFormat(new Date(date),'YYYY/MM/DD');
}

const aggregateOrdersByDay = (order=[]) => {
  // console.log('aggregateOrdersByDay()',order);
  // return order;
  return order.reduce((acc, curr) => {
    // console.log('acc',acc)
    // console.log('curr',curr.createdAt)
    const day = dateFormat(curr.createdAt, 'YYYY/MM/DD');
    // console.log('day', day);
    if (!acc[day]) {
      acc[day] = 0;
    }
    acc[day] += curr.amount || 0;
    // console.log('acc', acc);
    return acc;
  }, {});
}
const getRevenuePerDay = (orders) => {
  // console.log('getRevenuePerDay',orders)
  const daysWithRevenue = aggregateOrdersByDay(orders);
  // console.log('daysWithRevenue', daysWithRevenue);
  return lastMonthDays.map(date => {
    // console.log('data',dateFormat(date));
    return ({
      date: date.getTime(),
      'total': daysWithRevenue[dateFormat(date, 'YYYY/MM/DD')] || 0,
    })
  });
};

const OrderChart = (props) => {
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

  // React.useEffect(() => {

  const { isLoading: loaded, data: visitors } = useGetList(props.model,
    {
      filter: {date_gte: aMonthAgo.toISOString()},
      pagination: { page: 1, perPage: 10000 }
      // sort: { field: "published_at", order: "DESC" }
    }
  );
  // }, []);

  // console.log('loaded',loaded)
  // console.log('visitors',visitors)

  // if (!loaded) return null;

  const nb = visitors ? visitors.reduce((nb) => ++nb, 0) : 0;
  let all_data=getRevenuePerDay(visitors);
  console.log('all_data',all_data)
  // return JSON.stringify(all_data)
  return (
    <Card className={'width1000'}>
      <CardHeader title={translate(props.title)}/>
      <CardContent>
        <div style={{ height: 300}} className={'order-chart'}>
          <ResponsiveContainer  width="100%" height="100%">
            <BarChart  data={all_data}   width={1000}>

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
              <YAxis />
              <Tooltip
                cursor={{strokeDasharray: '3 3'}}
                formatter={(value,name,props) => {
                  let {payload}=props;
                  let {date}=payload;

                  console.log('payload',value,name,props)

                  if(value)
                    return <div><div>{dateFormatter(date)}</div><div>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' '+translate(themeData.currency)}</div></div>;
                  else
                    return '0';
                }}
                labelFormatter={(label) =>{
                  console.log('dateFormatter(label)',dateFormatter(label))
                  return dateFormatter(label)
                }}
              />
              <Legend />
              <Bar dataKey={("total")} label={translate("total")} fill="#8884d8" />
              {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
            </BarChart>
          </ResponsiveContainer>
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

export default OrderChart;
