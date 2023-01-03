import {
  BooleanField,
  Datagrid,
  Filter,
  FunctionField,
  NumberField,
  SearchInput,
  SimpleShowLayout,
  TextField,
  EditButton,
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
        <TextField source="method" label={translate("resources.transaction.gateway")}/>
        {/*<TextField source="orderNumber" label={translate("resources.transaction.orderNumber")}/>*/}

        <FunctionField label={translate("resources.transaction.orderNumber")}
                       render={record => (
                         <div className='theDate'>


                           {record.order &&
                           <a href={"/#/order/" + record.order} target={"_blank"}>{record.orderNumber}</a>}

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
        <FunctionField label={translate("resources.transaction.edit")}
                       render={record => (
                         <>
                           <div>
                             <EditButton label={"resources.transaction.edit"} key={"00"}/>
                           </div>

                           {/*<EditButton label={"resources.product.content"} key={'11'}/>,*/}
                           {/*<ShowButton label={"resources.product.analytics"} key={'22'}/>,*/}

                         </>
                       )}/>

      </Datagrid>
    </List>
  );
};


export default transactionList;
