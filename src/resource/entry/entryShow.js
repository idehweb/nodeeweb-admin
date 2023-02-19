import { Show, TextInput,FunctionField, useEditController, SimpleShowLayout, useTranslate,TextField } from "react-admin";
import { BASE_URL } from "@/functions/API";
import { dateFormat } from "@/functions";
import Box from "@mui/material/Box";

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
import { Val } from "@/Utils";
import React from "react";

export const entryShow = (props) => {
  console.log("props", props);
  const translate = useTranslate();
  // const { id } = props;
  // const { record, save, isLoading } = useEditController({ resource: "form", id });

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source={"_id"} label={translate("_id")}
                   className={"width100 mb-20"} fullWidth disabled/>
        <FunctionField label={translate("resources.entry.data")}
                       render={record => {
                         if(record.data){

                           return Object.keys(record.data).map((item)=>{
                             return <Box style={{marginBottom:'20px'}} ><span>{item}</span><span>:</span><span>{record.data[item]}</span></Box>
                           })
                         }

                       }}/>
        {/*<Form record={record} redirect={false}>*/}

        {/*</Form>*/}
      </SimpleShowLayout>
    </Show>
  );
};

export default entryShow;
