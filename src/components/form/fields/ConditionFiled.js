import React ,{useState} from 'react';
import { useTranslate } from 'react-admin';
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Form, FormGroup, FormInput ,Button} from "shards-react";
import { Container, Row, Col } from "shards-react";
function ConditionFiled(props) {
  const translate=useTranslate();
  const {type} = props;
  console.log("typeeeeeeeee",type);
  if (type !== 'radio' && type !== 'select') {
    return;
  }
  const [optionValues, setOptionValues] = useState([
    {
      title: "",
      value : ""
    }
    ])
  let handleChange = (i, e) => {
    let newFormValues = [...optionValues];
    newFormValues[i][e.target.name] = e.target.value;
    setOptionValues(newFormValues);
  }

  let addFormFields = () => {
    setOptionValues([...optionValues, { title: "", value: "" }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...optionValues];
    newFormValues.splice(i, 1);
    setOptionValues(newFormValues)
  }
  let handleSubmit = (event) => {
    event.preventDefault();
    // props.saveOptions(JSON.stringify(optionValues))
    props.saveOptions(optionValues);
  }
  return (
    <React.Fragment>
      <Form>
        <Container>
          <Button theme="success" size="sm" onClick={() => addFormFields()}>Add Option</Button>
          <Button theme="info" size="sm" onClick={(e) => handleSubmit(e)}>Save</Button>
          <Row>
            {optionValues.map((element, index) => (
              <Col className={"d-flex justify-content-start"}>
                <FormGroup key={index}>
                  <label htmlFor="title">Title</label>
                  <FormInput id="title" type="text" name="title" value={element.title || ""} onChange={e => handleChange(index, e)} />
                  <label htmlFor="value">Value</label>
                  <FormInput id="value" type="text" name="value" value={element.value || ""} onChange={e => handleChange(index, e)} />
                  {
                    index ?
                      <Button size="sm" theme="danger" onClick={() => removeFormFields(index)}><RemoveCircleOutlineIcon/></Button>
                      : null
                  }
                </FormGroup>
              </Col>
            ))}


          </Row>
        </Container>

      </Form>


    </React.Fragment>
    )
}

export default (ConditionFiled);
