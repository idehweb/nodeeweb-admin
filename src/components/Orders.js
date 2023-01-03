import * as React from "react";
import { useCallback, useEffect, useState } from "react";
// import MuiGridList from '@mui/material/GridList';
// import GridListTile from '@mui/material/GridListTile';
// import GridListTileBar from '@mui/material/GridListTileBar';
// import withWidth, { WithWidth } from '@mui/material/withWidth';
import { ShopURL } from "@/functions/API";
import { useDataProvider } from "react-admin";
import { DataGrid } from "@mui/x-data-grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Orders = (props) => {
  const { record } = props;
  const { _id } = record;
  const [state, setState] = useState({});
  // const version = useVersion();
  const dataProvider = useDataProvider();

  const fetchOrders = useCallback(async () => {
    const { data: Data } = await dataProvider.get(
      "order/0/10000?customer=" + _id,
      {}
    );
    console.log("Data", Data);


    setState(state => ({
      ...state,
      orders: Data

    }));

  }, [dataProvider]);
  useEffect(() => {
    fetchOrders();
  }, []);
  let { orders } = state;
  // const { data,isLoading } = useListContext();
  // let loaded = Boolean(data && data.length);
  // console.log("loaded", loaded,isLoading);
  // let objs=Object.keys(orders);
  const columns = [
    { field: "_id", headerName: "ID" },
    { field: "orderNumber", headerName: "orderNumber", type: "number" },
    {
      field: "amount",
      headerName: "Amount",
      type: "number"
    },
    {
      field: "sum",
      headerName: "Sum",
      type: "number"
    },
    {
      field: "paymentStatus",
      headerName: "paymentStatus"
    },
    {
      field: "status",
      headerName: "status"
    }
    ,
    {
      field: "createdAt",
      headerName: "createdAt"
    },
    {
      field: "updatedAt",
      headerName: "updatedAt"
    }
  ];
  if (!orders) {
    return <></>;
  }
  // return  <div style={{ height: 400, width: '100%' }}><DataGrid
  //   getRowId={(row) => row._id}
  //   rows={orders}
  //   columns={columns}
  //   pageSize={20}
  //   rowsPerPageOptions={[5, 20, 100]}
  // /></div>;
  return <TableContainer component={Paper}>
    <Table sx={{ minWidth: '100%',marginBottom:'20px' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>_id</TableCell>
          <TableCell align="right">sum</TableCell>
          <TableCell align="right">amount</TableCell>
          <TableCell align="right">orderNumber</TableCell>
          <TableCell align="right">status</TableCell>
          <TableCell align="right">paymentStatus</TableCell>
          <TableCell align="right">updatedAt</TableCell>
          <TableCell align="right">createdAt</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>

    {orders && orders.map((item,i) => {
      return <TableRow key={i}>
        <TableCell component="th" scope="row">{JSON.stringify(item._id)}</TableCell>
        <TableCell>{JSON.stringify(item.sum)}</TableCell>
        <TableCell>{JSON.stringify(item.amount)}</TableCell>
        <TableCell>{JSON.stringify(item.orderNumber)}</TableCell>
        <TableCell>{JSON.stringify(item.status)}</TableCell>
        <TableCell>{JSON.stringify(item.paymentStatus)}</TableCell>
        <TableCell>{JSON.stringify(item.updatedAt)}</TableCell>
        <TableCell>{JSON.stringify(item.createdAt)}</TableCell>
      </TableRow>;

    })}
    </TableBody>
    </Table>
  </TableContainer>;
};

export default Orders;
