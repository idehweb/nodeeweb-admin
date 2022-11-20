import React from "react";
import Button from "@mui/material/Button";
import API, { BASE_URL } from "@/functions/API";
import { showFiles } from "@/components";
import DeleteIcon from "@mui/icons-material/Delete";

API.defaults.headers.common["Content-Type"] = "multipart/form-data";

export default (props) => {
  let { photo, v, onImageClick, deletFromObject, unicKey, className='',deleteFunction=true } = props;
  // console.log("Show///ImageField...",photo,unicKey);

  return <div className={className + " hytrdf " + (v === photo ? "active" : "")}>
    <img onClick={() => onImageClick(photo)} src={BASE_URL + "/" + photo}/>
    <div className={"bottom-actions"}>
      {deleteFunction && <Button onClick={() => deletFromObject(photo, unicKey)}>
        <DeleteIcon/>
      </Button>}
    </div>
  </div>;
};
