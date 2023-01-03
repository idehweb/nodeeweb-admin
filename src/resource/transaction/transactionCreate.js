import { Create, NumberInput, useTranslate,ReferenceInput,AutocompleteInput } from "react-admin";
import {
  AddProductsField,
  List,
  OrderPaymentStatus,
  OrderStatus,
  PrintOrder,

  PrintPack,
  SimpleForm
} from "@/components";
import { dateFormat } from "@/functions";
import API, { BASE_URL } from "@/functions/API";
import React, { useState } from "react";
// import { useTranslate } from "react-admin/dist/index";


const Form = ({ children, ...props }) => {
  const translate = useTranslate();
  const [url, setUrl] = useState([""]);
  const save = (values) => {
    console.log("save...", values);
    API.post("/order/", JSON.stringify({ ...values }))
      .then(({ data = {} }) => {
        // alert('it is ok');

        if (data.success) {
          // values = [];
          // data.url = [];
          var theUrl = document.getElementById("theUrl");
          theUrl.value = data.url;
          console.log("data.url", data.url);
          setUrl(data.url);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });

  };

  return (
    <SimpleForm {...props} onSubmit={(e) => save(e)} className={"d-flex"}>

      <NumberInput source="amount" label={translate("resources.order.amountToPay")}
                   className={"width100 mb-20 ltr"} fullWidth/>

      <input id={"theUrl"} defaultValue={url} className={"ltr"}/>
      {children}
    </SimpleForm>
  );
};

const create = (props) => (
  <Create {...props} redirect={"false"}>
    <Form>


    </Form>
  </Create>
);


export default create;
