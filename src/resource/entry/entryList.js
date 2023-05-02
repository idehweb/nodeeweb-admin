import {
  Datagrid,
  DeleteButton,
  EditButton,
  ShowButton,
  Filter,
  FunctionField,
  Pagination,
  TextField,
  TextInput,
  SearchInput,
  useTranslate,
  SelectInput,ReferenceInput
} from "react-admin";

import API, { BASE_URL } from "@/functions/API";
import { dateFormat } from "@/functions";
import {
  CatRefField,
  EditOptions,
  FileChips,
  List,
  ShowDescription,
  showFiles,
  ShowLink,
  ShowOptions,
  ShowPictures,
  SimpleForm,
  SimpleImageField,
  UploaderField
} from "@/components";
import { Button } from "@mui/material";

import React from "react";


const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;


const postRowStyle = (record, index) => {

  return ({
    backgroundColor: "#ee811d"
  });
};


const PostFilter = (props) => {
  const translate = useTranslate();
  
  return (
    <Filter {...props}>
      
      {/* <SearchInput source="title" reference="form.title" placeholder={translate("resources.post.category")} alwaysOn/> */}
      <SearchInput source="Search" reference="entry.form.title" placeholder={translate("resources.post.category")} alwaysOn/>
    {/* <ReferenceInput source="id" reference="form" alwaysOn>
      <SelectInput/>
    </ReferenceInput> */}


    </Filter>
  );
};


const list = (props) => {
  const translate = useTranslate();
  

  return (

    <>
    <List  {...props} filters={<PostFilter/>} pagination={<PostPagination/>}>
      <Datagrid optimized>
        <TextField source="trackingCode" label={translate("resources.entry.trackingCode")}/>

        <TextField source={"form.title." + translate("lan")} label={translate("resources.form.title")}/>


        <FunctionField label={translate("resources.post.date")}
                       render={record => (
                         <div className='theDate'>
                           <div>
                             {translate("resources.post.createdAt") + ": " + `${dateFormat(record.createdAt)}`}
                           </div>
                           <div>
                             {translate("resources.post.updatedAt") + ": " + `${dateFormat(record.updatedAt)}`}
                           </div>

                           {record.views && <div>
                             {translate("resources.post.viewsCount") + ": " + `${(record.views.length)}`}
                           </div>}
                         </div>
                       )}/>
        <FunctionField label={translate("resources.post.actions")}
                       render={record => (<div>
                         <div>
                           <ShowButton/>
                         </div>
                         <div>
                           <EditButton/>
                         </div>
                         <div>
                           <DeleteButton/>
                         </div>
                       </div>)}/>
      </Datagrid>
    </List>
    </>
  );
};

export default list;