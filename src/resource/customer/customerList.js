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
import {List, SimpleForm} from '@/components';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Title" source="title" defaultValue="Hello, World!" />
    </Filter>
);

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export const customerList = (props) => {
    const translate=useTranslate();
    return(
    <List
      {...props}
      filters={<PostFilter/>} pagination={<PostPagination/>}>
      <Datagrid>
        <NumberField source="phoneNumber" label={translate("resources.customers.phoneNumber")}/>
        <TextField source="activationCode" label={translate("resources.customers.activationCode")}/>
        <TextField source="firstName" label={translate("resources.customers.firstName")}/>
        <TextField source="lastName" label={translate("resources.customers.lastName")}/>
        <EmailField source="email" label={translate("resources.customers.email")}/>
        <EmailField source="internationalCode" label={translate("resources.customers.internationalCode")}/>
        <FunctionField label={translate("resources.customers.createdAt")}
                       render={record => `${dateFormat(record.createdAt)}`}/>
        <FunctionField label={translate("resources.customers.updatedAt")}
                       render={record => `${dateFormat(record.updatedAt)}`}/>
        <BooleanField source="active" label={translate("resources.customers.active")}/>
        <EditButton/>
      </Datagrid>
    </List>
  );
};



export default customerList;
