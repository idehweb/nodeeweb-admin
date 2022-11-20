import {
  BooleanField,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  EditButton,
  useTranslate
} from 'react-admin';
import { List, SimpleForm } from '@/components';
export const userList = (props) => {
  const translate=useTranslate();
  return(
    <List {...props}>
      <Datagrid>
        {/*<TextField source="id"/>*/}
        <EmailField source="email" label={translate("resources.user.email")} />
        <TextField source="username" label={translate("resources.user.username")} />
        <TextField source="nickname" label={translate("resources.user.nickname")} />
        <DateField source="createdAt" showTime label={translate("resources.user.createdAt")} />
        <DateField source="updatedAt" showTime label={translate("resources.user.updatedAt")} />
        <BooleanField source="active" label={translate("resources.user.active")} />
        <EditButton />
      </Datagrid>
    </List>
  );
}


export default userList;
