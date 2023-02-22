import DefaultGeneral from './DefaultGeneral'
import React from "react";
let {fields,rules}=DefaultGeneral;
const FormOptions = [
 {
    "label": "Text",
    "name": "text",
    "addable": false,
    "settings": {
      "general": {
        "fields": {"text": "","direction": "","target": "","link": "","fontSize":"13px","lineHeight":"1","iconImage":"","iconFont":"","iconPosition":"top","iconColor":"","fontWeight":"normal",...fields},
        "rules": [
          {"name": "text", "type": "textarea"},
          {"name": "direction", "type": "string"},
          {"name": "target", "type": "string"},
          {"name": "link", "type": "string"},
          {"name": "fontSize", "type": "string"},
          {"name": "lineHeight", "type": "string"},
          {"name": "iconImage", "type": "image"},
          {"name": "iconFont", "type": "string"},
          {"name": "iconPosition", "type": "string"},
          {"name": "fontWeight", "type": "string"},
          {"name": "iconColor", "type": "string"},

          ...rules

        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  },{
    "label": "Input",
    "name": "input",
    "addable": false,
    "settings": {
      "general": {
        "fields": {"label": "","name": "", "value": "","placeholder": "","require": "","sm": "","lg": ""},
        "rules": [
          {"name": "label", "type": "string"},
          {"name": "name", "type": "string"},
          {"name": "value", "type": "string"},
          {"name": "placeholder", "type": "string"},
          {"name": "sm", "type": "string"},
          {"name": "lg", "type": "string"},
          {"name": "require", "type": "boolean","value":false},
        ]
      },
      "design": [],
    }
  },{
    "label": "Radio",
    "name": "radio",
    "addable": false,
    "settings": {
      "general": {
        "fields": {
          "label": "",
          "name": "",
          "value": "",
          "direction": "",
          "fontSize":"13px",
          "lineHeight":"1",
          "fontWeight":"normal",
          "inputClassName":"",
          "wrapperClassName":"",
          "labelClassName":"",
          ...fields},
        "rules": [
          {"name": "label", "type": "string"},
          {"name": "name", "type": "string"},
          {"name": "value", "type": "string"},
          {"name": "direction", "type": "string"},
          {"name": "fontSize", "type": "string"},
          {"name": "lineHeight", "type": "string"},
          {"name": "fontWeight", "type": "string"},
          {"name": "inputClassName", "type": "string"},
          {"name": "wrapperClassName", "type": "string"},
          {"name": "labelClassName", "type": "string"},
          ...rules

        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  },{
    "label": "Select",
    "name": "select",
    "addable": false,
    "settings": {
      "general": {
        "fields": {
          "placeholder": "",
          "label": "",
          "name": "",
          "value": "",
          "direction": "",
          "fontSize":"13px",
          "lineHeight":"",
          "fontWeight":"normal",
          "inputClassName":"",
          "wrapperClassName":"",
          "labelClassName":"",
          "options":"",
        },
        "rules": [
          {"name": "placeholder", "type": "string"},
          {"name": "label", "type": "string"},
          {"name": "name", "type": "string"},
          {"name": "value", "type": "string"},
          {"name": "direction", "type": "string"},
          {"name": "fontSize", "type": "string"},
          {"name": "lineHeight", "type": "string"},
          {"name": "fontWeight", "type": "string"},
          {"name": "inputClassName", "type": "string"},
          {"name": "wrapperClassName", "type": "string"},
          {"name": "labelClassName", "type": "string"},
          {"name": "options", "type": "string"},

        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  }, {
    "label": "Textarea",
    "name": "textarea",
    "addable": false,
    "settings": {
      "general": {
        "fields": {"label": "","name": "", "value": "", "placeholder": "","require": "","sm":"","lg":"lg"},
        "rules": [
          {"name": "label", "type": "string"},
          {"name": "name", "type": "string"},
          {"name": "value", "type": "string"},
          {"name": "placeholder", "type": "string"},
          {"name": "sm", "type": "string"},
          {"name": "lg", "type": "string"},
          {"name": "require", "type": "boolean","value":false},
        ]
      },
      "design": [],
    }
  }];
export default FormOptions;
