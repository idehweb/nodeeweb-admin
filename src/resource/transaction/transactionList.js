import {
  BooleanField,
  Datagrid,
  Filter,
  FunctionField,
  NumberField,
  SearchInput,
  SimpleShowLayout,
  TextField,
  SelectField,
  useTranslate
} from "react-admin";

import { dateFormat } from "@/functions";
import { List, StatusField,PaymentStatus ,TransactionPaymentStatusField} from "@/components";
// import Transactions from "../../../../main/src/client/views/Transactions";


export const transactionList = (props) => {
  const translate = useTranslate();
  const PaymentStatuses = PaymentStatus();
  console.log('PaymentStatus',PaymentStatuses);

  return (
    <List {...props} filters={
      <Filter {...props}>
        <SearchInput source="search" alwaysOn/>
      </Filter>
    }>
      <Datagrid>
        {/*<TextField source="id"/>*/}
        <TextField source="Authority" label={translate("resources.transaction.authority")}/>
        <NumberField source="amount" label={translate("resources.transaction.amount")}/>
        <TextField source="RefID" label={translate("resources.transaction.referenceId")}/>

        <FunctionField label={translate("resources.transaction.orderNumber")}
                       render={record => (
                         <div className='theDate'>


                           {record.order &&
                           <a href={"/#/order/" + record.order._id} target={"_blank"}>{record.order.orderNumber}</a>}

                         </div>
                       )}/>

        <SelectField source="statusCode" choices={PaymentStatuses}
        label={translate("resources.transaction.statusCode")} optionText={<TransactionPaymentStatusField />}
        />
        <BooleanField source="status" label={translate("resources.transaction.status")}/>
        <FunctionField label={translate("resources.transaction.date")}
                       render={record => (
                         <div className='theDate'>
                           <div>
                             {translate("resources.transaction.createdAt") + ": " + `${dateFormat(record.createdAt)}`}
                           </div>
                           <div>
                             {translate("resources.transaction.updatedAt") + ": " + `${dateFormat(record.updatedAt)}`}
                           </div>

                         </div>
                       )}/>
      </Datagrid>
    </List>
  );
};


export default transactionList;
