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
} from 'react-admin';
import {dateFormat} from '@/functions';
import {CategoryRounded as Icon,Group,GroupAdd} from '@mui/icons-material';
import {List, SimpleForm} from '@/components';

// import ListActions from "./../components/ListActions"
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Title" source="title" defaultValue="Hello, World!" />
    </Filter>
);
// export const postFilter = props => (
//     <Filter {...props}>
//         <TextInput label="Search" source="q" alwaysOn />
//         <BooleanInput source="is_published" alwaysOn />
//         <TextInput source="title" defaultValue="Hello, World!" />
//     </Filter>
// );
/*<BooleanInput source="is_published" alwaysOn />*/
/*<TextInput source="title" defaultValue="Hello, World!" />*/
const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export const customerList = (props) => (
    // filterDefaultValues={{ is_published: true }}
    <List
        {...props}
        filters={<PostFilter/>} pagination={<PostPagination/>}>
        <Datagrid>
            {/*<TextField source="id"/>*/}
            <NumberField source="phoneNumber" label="شماره تماس"/>
            {/*<NumberField source="countryCode" label="country code"/>*/}
            <TextField source="activationCode" label="کد فعال سازی"/>
            <TextField source="firstName" label="نام"/>
            <TextField source="lastName" label="نام خانوادگی"/>
            <EmailField source="email" label="ایمیل"/>
            <EmailField source="internationalCode" label="کد ملی"/>
            <FunctionField label="تاریخ ایجاد حساب"
                           render={record => `${dateFormat(record.createdAt)}`}/>
            <FunctionField label="بروزرسانی شده در"
                           render={record => `${dateFormat(record.updatedAt)}`}/>
            <BooleanField source="active" label="فعال/غیر فعال"/>
            <EditButton/>
            {/*<ShowButton/>*/}
            {/*<DeleteButton/>*/}
        </Datagrid>
    </List>
);

export const customerEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="firstName" label={'نام'}/>
            <TextInput source="lastName" label={'نام خانوادگی'}/>
            <TextInput source="internationalCode" label={'کد ملی'}/>
            <TextInput source="email" type="email"/>
            <TextInput source="phoneNumber" label={'شماره موبایل'}/>
            <TextInput source="countryCode"/>
            <TextInput source="activationCode"/>
            <BooleanInput source="active"/>
            <ImageInput source="photos[0]" label="Profile photo" accept="image/*">
                <ImageField source="url" title="title"/>
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const customerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="email" type="email"/>
            <TextInput source="phoneNumber"/>
            <NumberInput source="countryCode"/>
            <TextInput source="activationCode"/>
        </SimpleForm>
    </Create>
);

export const customerShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <TextField source="email"/>
            <TextField source="phoneNumber"/>
            <TextField source="countryCode"/>
            <TextField source="activationCode"/>

        </SimpleShowLayout>
    </Show>
);

export default customerShow;
