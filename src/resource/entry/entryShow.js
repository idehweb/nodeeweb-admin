import { Show, TextInput,FunctionField, useEditController, SimpleShowLayout, useTranslate,TextField } from "react-admin";
import API,{BASE_URL } from "@/functions/API";
import { dateFormat } from "@/functions";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useGetOne } from 'react-admin';
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
  const translate = useTranslate();
  const { id } = useParams();
  let [formTitle,setFormTitle] = React.useState('');
  return (
    <Show {...props}>
      <SimpleShowLayout>
        
                   <span>{formTitle ? formTitle : translate("resources.entry.data")}</span>
                   {/* <TextField source={"_id"} label={translate("_id")}
                   className={"width100"} fullWidth disabled/> */}
                   <hr style={{border:'3px solid #ddd'}}/>
        {/* <FunctionField label={formTitle ? formTitle : translate("resources.entry.data")} fontSize={16} */}
         <FunctionField 
                       render={record => {
                         if(record.data){
                          let fID = record.form;
                            API.get(BASE_URL+'/admin/form/'+fID)
                                .then((formData) => {
                                  if(formData.data){
                                    setFormTitle(formData.data.title.fa);
                                  }
                                })
                                .catch((err) => {
                                  console.log('datadatadatadatadata',err);
                                });
                           return Object.keys(record.data).map((item)=>{
                              if(item !== 'undefined'){
                                  return <Box style={{marginBottom:'20px',marginTop:'20px'}} >
                                    <span style={{fontSize:'18px'}}>{translate("resources.entry."+item)}</span><span style={{padding:'0 10px'}}>:</span><span  style={{fontSize:'18px'}}>{record.data[item]}</span>
                                </Box>
                              }
                             
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
