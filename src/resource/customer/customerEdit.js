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
import { ReferenceArrayInput, SelectArrayInput } from 'react-admin';

import {dateFormat} from '@/functions';
import {CategoryRounded as Icon,Group,GroupAdd} from '@mui/icons-material';
import {List, SimpleForm} from '@/components';
import { useTranslate } from "react-admin/dist/index";
const validateUserCreation = (values) => {
  const errors = {};
  if (!values.parent) {
    values.parent = {};
  }
  if (values.parent=="") {
    values.parent = {};
  }
  // if (!values.age) {
  //   // You can return translation keys
  //   errors.age = 'ra.validation.required';
  // } else if (values.age < 18) {
  //   // Or an object if the translation messages need parameters
  //   errors.age = {
  //     message: 'ra.validation.minValue',
  //     args: { min: 18 }
  //   };
  // }
  return errors
};

export const customerEdit = (props) => {
    console.log('props',props);
  const translate=useTranslate();

  return(
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id"  label={translate("resources.customers._id")}/>
        <TextInput source="firstName"  label={translate("resources.customers.firstName")}/>
        <TextInput source="lastName"  label={translate("resources.customers.lastName")}/>
        <TextInput source="internationalCode"  label={translate("resources.customers.internationalCode")}/>
        <TextInput source="email" type="email"  label={translate("resources.customers.email")}/>
        <TextInput source="phoneNumber"  label={translate("resources.customers.phoneNumber")}/>
        <TextInput source="countryCode"  label={translate("resources.customers.countryCode")}/>
        <TextInput source="activationCode"  label={translate("resources.customers.activationCode")}/>
        <ReferenceArrayInput source="customerGroup" reference="customerGroup">
          <SelectArrayInput optionText="name.fa" />
        </ReferenceArrayInput>
        <BooleanInput source="active"  label={translate("resources.customers.active")}/>
      </SimpleForm>
    </Edit>
  );
}


export default customerEdit;
