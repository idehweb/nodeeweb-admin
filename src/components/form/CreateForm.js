import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { Button, Col, Container, Row } from "shards-react";
import { useSelector } from "react-redux";
import { changeThemeData, MainUrl, uploadMedia } from "@/functions/index";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  EveryFields,
  FieldArray,
  FieldBoolean,
  FieldCheckbox,
  FieldCheckboxes,
  FieldJson,
  FieldNumber,
  FieldObject,
  FieldPrice,
  FieldSelect,
  FieldServer,
  FieldText,
  FieldTextarea
} from "@/components/form/fields";

function CreateForm(props) {
  let { fields, rules = { fields: [] }, t } = props;
  // console.clear();
  console.log("fields", fields);
  console.log("rules", rules);

  const themeData = useSelector((st) => st.themeData);
  console.log("themeData", themeData);
  if (!themeData) {
    return;
  }
  const [theRules, setTheRules] = useState(rules);
  const [theF, setTheF] = useState('');
  useEffect(() => {
    // changeThemeData();
    if (!theRules || (theRules && !theRules.fields) || (theRules.fields && !theRules.fields[0])) {
      Object.keys(fields).forEach((fi) => {
        let typ = typeof fields[fi];
        // console.log('typ instanceof' ,fields[fi]);
        if (fields[fi] instanceof Array) {
          typ = "select";
        }
        rules.fields.push({
          "name": fi,
          "type": typ
        });
      });
      setTheRules(rules);
    }
  }, []);

  const addField = (e) => {
    e.preventDefault();
    if(theF) {
      let f = rules.fields;
      let fi = {
        "name": theF,
        "type": "string",
        "value": ""
      };
      f.push(fi);
      setTheF('')
      console.log('rules', rules)
      setTheRules({ fields: [...f] });
    }
  };
  const TheField = (field) => {
    // console.log('field', field);
    if (!field) {
      return <>no field</>;
    }

    const { type, removeField, kind, size, className, options, disabled = false, name, label, placeholder } = field;
    // console.log('themeData',  themeData['models']);
    // moment(field.value, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]", true).isValid())

    if (type == "date") {
      console.log("date");
      return <Col
        sm={size ? size.sm : ""}
        lg={size ? size.lg : ""}
        className={"MGD " + className}>
        <label htmlFor={name}>{label}</label>
        <EveryFields onClick={(e) => removeField(e)}/>

        <Field
          name={name}
          component="input"
          type="date"
          placeholder={placeholder || label}
          className="mb-2 form-control"
        />

      </Col>;
    }
    if (type == "string" || !type) {
      // console.log('string')

      return <Col
        sm={size ? size.sm : ""}
        lg={size ? size.lg : ""}
        className={"MGD " + className}>
        <label htmlFor={name}>{label}</label>
        <EveryFields onClick={(e) => removeField(e)}/>
        <Field
          name={name}
          component="input"
          type="text"
          placeholder={placeholder || label}
          className="mb-2 form-control"
          disabled={disabled}
        />

      </Col>;
    }
    if (type == "price") {
      // console.log('string')

      return <FieldPrice field={field} removeField={(e) => removeField(e)}/>;
    }
    if (type == "json") {
      // console.log('string')

      return <FieldJson field={field}/>;
    }
    if (type == "object") {
      // return  .stringify(field)
      return <FieldObject field={field} removeField={(e) => removeField(e)}/>;
    }
    if (type == "array") {
      return <FieldArray field={field}/>;

    }
    if (type == "checkbox") {
      // console.clear()
      // console.log(field)
      return <FieldCheckbox field={field}/>;

    }
    if (type == "checkboxes") {
      // console.clear()
      // console.log(field)
      return <FieldCheckboxes field={field}/>;

    }
    if (type == "radio") {
      // console.clear()
      // console.log(field)
      return <FieldCheckbox field={field}/>;

    }
    if (type == "select") {
      return <FieldSelect field={field}/>;

    }
    if (type == "server") {
      return <FieldServer field={field}/>;

    }
    if (type == "number") {
      return <FieldNumber field={field} removeField={(e) => removeField(e)}/>;

      // return <Col
      //   sm={size ? size.sm : ''}
      //   lg={size ? size.lg : ''}
      //   className={'MGD ' + className}>
      //   <label htmlFor={name}>{t(label)}</label>
      //   <Field
      //     name={name}
      //     component="input"
      //     type="number"
      //     placeholder={placeholder || label}
      //     className="mb-2 form-control"
      //   />
      // </Col>
    }
    if (type == "textarea") {
      return <Col
        sm={size ? size.sm : ""}
        lg={size ? size.lg : ""}
        className={"MGD " + className}>
        <label htmlFor={name}>{label}</label>
        <EveryFields onClick={(e) => removeField(e)}/>

        <Field
          name={name}
          component="input"
          type="text"
          placeholder={placeholder || label}
          className="mb-2 form-control"
        />
      </Col>;
    }
    if (type == "boolean") {
      return <FieldBoolean field={field} removeField={(e) => removeField(e)}/>;
    }
    if (type == "image") {
      // console.log('image')
      return <Col
        sm={size ? size.sm : ""}
        lg={size ? size.lg : ""}
        className={"MGD " + className}>
        <label htmlFor={name}>{(label)}</label>
        <EveryFields onClick={(e) => removeField(e)}/>

        <Field
          name={name} className="mb-2 form-control">
          {props => {
            console.log("props", props);
            return (
              <div className={"max-width100"}>
                <img style={{ width: "100px" }} src={MainUrl + "/" + props.input.value}/>
                {!props.input.value && <input
                  name={props.input.name}
                  onChange={(props) => {
                    let { target } = props;
                    console.log(props);
                    console.log(target.files[0]);
                    uploadMedia(target.files[0], (e) => {
                      console.log("e", e);
                    }).then(x => {
                      if (x.success && x.media && x.media.url) {
                        console.log("set", name, x.media.url);

                        field.setValue(name, x.media.url);
                      }
                    });
                  }}

                  type={"file"}
                />}
                {props.input.value &&
                <div className={"posrel"}><img src={MainUrl + "/" + props.input.value}/><Button onClick={(e) => {
                  field.setValue(name, "");
                }} className={"removeImage"}><RemoveCircleOutlineIcon/></Button></div>}
              </div>
            );
          }}
        </Field>
        {/*<Field*/}
        {/*name={field.name}*/}
        {/*onClick={() => {*/}
        {/*console.log('open box')*/}
        {/*}}*/}
        {/*component="input"*/}
        {/*type="file"*/}
        {/*placeholder={placeholder || field.label}*/}
        {/*className="mb-2 form-control"*/}
        {/*/>*/}
        {/*{field.value}*/}
        {/*<Button inline-block  >Choose Media</Button>*/}

      </Col>;
    }
    if (type == "images") {
      // console.log('image')
      return <Col
        sm={size ? size.sm : ""}
        lg={size ? size.lg : ""}
        className={"MGD " + className}>
        <label htmlFor={name}>{label}</label>
        <EveryFields onClick={(e) => removeField(e)}/>

        <Field
          name={name} className="mb-2 form-control">
          {props => {
            // console.log('props', props)
            return (
              <div className={"max-width100"}>
                {!props.input.value && <input
                  name={props.input.name}
                  onChange={(props) => {
                    let { target } = props;
                    console.log(props);
                    console.log(target.files[0]);
                    uploadMedia(target.files[0], (e) => {
                      console.log("e", e);
                    }).then(x => {
                      if (x.success && x.media && x.media.url) {
                        console.log("set", name, x.media.url);

                        field.setValue(name, x.media.url);
                      }
                    });
                  }}

                  type={"file"}
                />}
                {props.input.value && <img src={MainUrl + "/" + props.input.value}/>}
              </div>
            );
          }}
        </Field>
        {/*<Field*/}
        {/*name={field.name}*/}
        {/*onClick={() => {*/}
        {/*console.log('open box')*/}
        {/*}}*/}
        {/*component="input"*/}
        {/*type="file"*/}
        {/*placeholder={placeholder || field.label}*/}
        {/*className="mb-2 form-control"*/}
        {/*/>*/}
        {/*{field.value}*/}
        {/*<Button inline-block  >Choose Media</Button>*/}

      </Col>;
    }

  };

  const onSubmit = async v => {
    console.log("onSubmit", v);
    console.log("theRules.fields", theRules.fields);
    if (props.onSubmit) {
      let values = v;
      if (theRules && theRules.fields)
        theRules.fields.forEach((item, i) => {
          console.log("irem", item);
          if (item.type == "object" && values[item.name] instanceof Array && item.value) {
            console.log("can we fix:", item);
            let obj = {};
            item.value.forEach((its) => {
              if (its)
                obj[its.property] = its.value;
            });
            values[item.name] = obj;
          } else {
            // values[item.name] = item.value;

          }
        });
      console.log("values", values);

      props.onSubmit(values);
    }
  };
  // console.log("fields:", fields)
  // console.log("rules:", rules)

  // console.clear()

  // console.log('iValues', iValues)
  // console.log('render')
  const removeField = (e, mindex) => {
    // console.log("index ,fields", e, mindex, fields);
    // console.log("theRules", theRules);
    let tempR = { ...theRules };
    let p = tempR.fields.filter((element, index) => index !== mindex);
    console.log("p", p);
    let px = { fields: p };
    // console.log("new theRules", px);

    setTheRules(px);
  };
  if (themeData)
    return (
      <div className="fields pt-2">
        <Form
          onSubmit={onSubmit}
          // validate={v => {
          //   // console.clear()
          //   let values = v;
          //   if (theRules && theRules.fields)
          //     theRules.fields.forEach((item, i) => {
          //       if (item.type == 'object' && values[item.name] instanceof Object && item.value) {
          //         console.log('can we fix:', item)
          //         let arr = [];
          //         Object.keys(item.value).forEach((it) => {
          //           let obj = {
          //             property: it,
          //             value: item.value[it]
          //           }
          //           arr.push(obj)
          //         })
          //         values[item.name] = arr;
          //       }
          //     })
          //   console.log('validate*********', values)
          //   console.log('theRules*********', theRules)
          //   // return values
          // }}
          initialValues={fields}
          mutators={{
            setValue: ([field, value], state, { changeValue }) => {
              // console.clear();

              console.log("setValue", field, value);
              changeValue(state, field, () => value);
            }
            // setMin: (args, state, utils) => {
            //   utils.changeValue(state, 'apples', () => 1)
            // },
          }}
          render={({
                     handleSubmit, form, submitting, pristine, values
                   }) => (
            <form onSubmit={handleSubmit}>
              <Container>
                <Row>
                  {theRules?.fields?.map((field, index) => {
                    console.log(',', field)
                    if (fields[field.name]) {
                      field.value = fields[field.name];
                    }
                    let lastObj = {
                      id: index,
                      type: field.type,
                      label: field.name,
                      name: field.name,
                      size: {
                        sm: 6,
                        lg: 6
                      },
                      onChange: (text) => {
                        // setFields([...fields,])
                        // this.state.checkOutBillingAddress.add.data[d] = text;
                      },
                      className: "rtl",
                      placeholder: "",
                      child: [],
                      ...field

                    };
                    if (field.value) {
                      // console.log('##########################the vvalue is:',field.value)
                      lastObj["value"] = field.value;
                    }
                    // console.log('lastObj', lastObj, form.mutators.setValue)
                    return (<TheField key={index} removeField={(e) => removeField(e, index)} {...lastObj}
                                      setValue={form.mutators.setValue}/>);
                  })}


                  <div className="buttons absolute-bottom top-bar-settings">
                    <Button type="submit">
                      <SaveIcon/>{("Submit")}
                    </Button>
                    <div className={"d-flex ltr"}>
                      <input className={"d-flex-inputs"} value={theF} onChange={(e)=>{setTheF(e.target.value)}}/>
                      <Button type="button" className={"whitespace-nowrap"} onClick={(e) => {
                        addField(e);
                      }}>
                        <AddCircleOutlineIcon/>{("Add Field")}
                      </Button>
                    </div>
                  </div>
                </Row>
              </Container>
            </form>)}
        />
      </div>
    );
  else return <></>;
}

export default (CreateForm);
