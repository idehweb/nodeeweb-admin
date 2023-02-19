import {
  Datagrid,
  DeleteButton,
  EditButton,
  Filter,
  FunctionField,
  Pagination,
  SearchInput,
  TextField,
  useTranslate,

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
      <SearchInput source="Search" placeholder={translate("resources.post.search")} alwaysOn/>
      <SearchInput source="category" placeholder={translate("resources.post.category")} alwaysOn/>
    </Filter>
  );
};


const list = (props) => {
  const translate = useTranslate();
  // rowStyle={postRowStyle}
  return (

    <List  {...props} filters={<PostFilter/>} pagination={<PostPagination/>}>
      <Datagrid optimized>

        <TextField source={"title."+translate('lan')} label={translate("resources.automation.title")}/>
        <TextField source="name" label={translate("resources.automation.name")}/>
        <TextField source="trigger" label={translate("resources.automation.trigger")}/>
        <TextField source="status" label={translate("resources.post.status")}/>


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
                           <EditButton/>
                         </div>

                         <div>
                           <DeleteButton/>
                         </div>
                       </div>)}/>
      </Datagrid>
    </List>
  );
};

export default list;
