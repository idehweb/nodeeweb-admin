import React, {memo, useState} from 'react';
import {Field} from 'react-final-form'
import {Button, Col} from 'shards-react';
import {MainUrl, uploadMedia} from "@/functions/index";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {getField} from "@/components/form/fields";
import { useTranslate } from 'react-admin';


function FieldUploadDocument({field}) {
  const t = useTranslate();

  const {type, kind, size, className, name, label, placeholder, value = [], child, setValue} = field;
  // console.log('fieldfieldfieldfield', field);
  if (!Array.isArray(value))
    return null;

  let [theArray, setArray] = useState(value || []);
  const addChild = () => {
    let temp = [...theArray, child];

    setArray(temp);
  };
  const removeChild = (id) => {
    let temp = theArray.filter((i, idx) =>
      id !== idx
    );

    setArray(temp);
  };

  return <Col
    sm={size ? size.sm : ''}
    lg={size ? size.lg : ''}
    className={'MGD arrayField ' + className}>

    <div className='col d-flex justify-content-sb'>
      <label htmlFor={name}>{label ? t(label) : t(name)}</label>
      <Button size="small" className='flLeft p-1' onClick={(e) => {
        e.preventDefault();
        addChild();
      }}>
        <AddIcon/>
      </Button>
    </div>
    <Field
      name={name}
      className="mb-2 form-control">
      {() => {

        // return JSON.stringify(theArray);
        return theArray.map((ch, ke) =>
          (<div className={'row array-child-' + ke} key={ke}>
              {child && child.map((ch2, idx2) => {
                let fieldName = `${name}[${ke}].${ch2.name}`;
                let Component = getField(ch2.type);

                return <Component key={idx2} field={{
                  ...ch2,
                  value: (ch && ch2.name) ? ch[ch2.name] : {},
                  name: fieldName,
                  setValue: setValue
                }}/>;

              })}
              <span><Button onClick={(e) => {
                e.preventDefault();
                removeChild(ke);
              }}><RemoveCircleOutlineIcon/></Button></span>
            </div>
          ));


      }}
    </Field>
  </Col>

}
export default memo(FieldUploadDocument)
