import {
  Datagrid,
  DeleteButton,
  EditButton,
  Filter,
  FunctionField,
  Pagination,
  TextField,
  SearchInput,
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

        <ShowLink source={"title." + translate("lan")} label={translate("resources.post.title")}
                  sortable={false} base={"post"}/>
        <TextField source="slug" label={translate("resources.page.slug")}/>


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
                           {/*+"?token="+localStorage.getItem('token')*/}
                           <a target={"_blank"}
                              href={"/admin/#/builder" + "/page/" + record._id}>{translate("resources.post.pagebuilder")}</a>
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
                               API.post("/entry/copy/" + record._id, null)
                                 .then(({ data = {} }) => {
                                   // console.log('data', data._id);
                                   props.history.push("/post/" + data._id);
                                   // ale/rt('done');
                                 })
                                 .catch((err) => {
                                   console.log("error", err);
                                 });
                             }}>
                             {translate("resources.post.copy")}
                           </Button>
                         </div>
                         <div>
                           <a
                             href={"/#/action?filter=%7B%post\"%3A\"" + record._id + "\"%7D&order=ASC&page=1&perPage=10&sort=id/"}
                             target={"_blank"}
                             color="primary"
                             size="small"
                             onClick={() => {

                             }}>
                             {translate("resources.post.activities")}
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
