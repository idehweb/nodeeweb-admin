import {
  Datagrid,
  DeleteButton,
  EditButton,
  Filter,
  FunctionField,
  Pagination,
  SearchInput,
  TextField,
  useTranslate
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
      <SearchInput source="Search" placeholder={translate("resources.template.search")} alwaysOn/>
      <SearchInput source="category" placeholder={translate("resources.template.category")} alwaysOn/>
    </Filter>
  );
};


const list = (props) => {
  const translate = useTranslate();
  // rowStyle={postRowStyle}
  return (

    <List  {...props} filters={<PostFilter/>} pagination={<PostPagination/>}>
      <Datagrid optimized>


        <TextField source="title" label={translate("resources.template.title")}/>
        <TextField source="type" label={translate("resources.template.type")}/>


        <FunctionField label={translate("resources.template.date")}
                       render={record => (
                         <div className='theDate'>
                           <div>
                             {translate("resources.template.createdAt") + ": " + `${dateFormat(record.createdAt)}`}
                           </div>
                           <div>
                             {translate("resources.template.updatedAt") + ": " + `${dateFormat(record.updatedAt)}`}
                           </div>

                           {record.views && <div>
                             {translate("resources.template.viewsCount") + ": " + `${(record.views.length)}`}
                           </div>}
                         </div>
                       )}/>
        <FunctionField label={translate("resources.template.actions")}
                       render={record => (<div>
                         <div>
                           {/*+"?token="+localStorage.getItem('token')*/}
                           <a target={"_blank"}
                              href={"/#/builder" + "/template/" + record._id}>{translate("resources.template.pagebuilder")}</a>
                         </div>
                         <div>
                           <EditButton/>
                         </div>
                         <div>
                           <Button
                             color="primary"
                             size="small"
                             onClick={() => {
                               // console.log('data', record._id);
                               API.post("/template/copy/" + record._id, null)
                                 .then(({ data = {} }) => {
                                   // console.log('data', data._id);
                                   props.history.push("/template/" + data._id);
                                   // ale/rt('done');
                                 })
                                 .catch((err) => {
                                   console.log("error", err);
                                 });
                             }}>
                             {translate("resources.template.copy")}
                           </Button>
                         </div>
                         <div>
                           <a
                             href={"/#/action?filter=%7B%page\"%3A\"" + record._id + "\"%7D&order=ASC&page=1&perPage=10&sort=id/"}
                             target={"_blank"}
                             color="primary"
                             size="small"
                             onClick={() => {

                             }}>
                             {translate("resources.template.activities")}
                           </a>
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
