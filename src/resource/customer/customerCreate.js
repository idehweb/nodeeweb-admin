import {
    BooleanField,
    BooleanInput,
    Create,
    Datagrid,
    DateField,
    DeleteButton,
    Edit,
    EditButton,
    EmailField,
    FunctionField,
    Filter,
    ImageField,
    ImageInput,
    NumberField,
    NumberInput,
    RichTextField,
    SearchInput,
    Show,
    ShowButton,
    Pagination,
    SimpleShowLayout,
    TextField,
    TextInput,
  useTranslate
} from 'react-admin';
import {dateFormat} from '@/functions';
import {CategoryRounded as Icon,Group,GroupAdd} from '@mui/icons-material';
import {List, SimpleForm} from '@/components';


export const customerCreate = (props) => {
  const translate=useTranslate();

  return(
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled source="id" label={translate("resources.customers._id")}/>
        <TextInput source="firstName" label={translate("resources.customers.firstName")}/>
        <TextInput source="lastName" label={translate("resources.customers.lastName")}/>
        <TextInput source="email" type="email" label={translate("resources.customers.email")}/>
        <TextInput source="phoneNumber" label={translate("resources.customers.phoneNumber")}/>
        <NumberInput source="countryCode" label={translate("resources.customers.countryCode")}/>
        <TextInput source="activationCode" label={translate("resources.customers.activationCode")}/>
      </SimpleForm>
    </Create>
  );
}



export default customerCreate;
