import React from 'react';
import Box from '@mui/material/Box';
import { useGetList } from "react-admin";
import FilterWithDate from "#c/components/dashboard/base/FilterWithDate";
const OrderDateChartFilters = (props) => {
  const {handlerStart,handlerEnd,model} = props;
  const { isLoading: loaded, data: forms } = useGetList(model);

  const startHandler = (dateValue) =>{
    handlerStart(dateValue);
  }
  const endHandler = (dateValue) =>{
    handlerEnd(dateValue);
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FilterWithDate type={'startDate'} handlerChangeFilter={startHandler} />
      <FilterWithDate type={'endDate'} handlerChangeFilter={endHandler} />
    </Box>
  );
}
export default OrderDateChartFilters
