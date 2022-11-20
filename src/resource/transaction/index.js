import transactionShow from "./transactionShow";
import transactionList from "./transactionList";
import { MonetizationOn } from "@mui/icons-material";

const Transaction = {
  list: transactionList,
  edit: transactionShow,
  icon: MonetizationOn
};
export default Transaction;