import notificationList from "./notificationList";
import notificationCreate from "./notificationCreate";
import { Send,Textsms } from "@mui/icons-material";

const Notification = {
  list: notificationList,
  create: notificationCreate,
  icon: Textsms,
  createIcon: Send,
};
export default Notification;