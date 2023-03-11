import DefaultGeneral from './DefaultGeneral'
let {fields,rules}=DefaultGeneral;
const FormOptions = [
  {
    "label": "Steps",
    "name": "steps",
    "addable": true,
    "settings": {
      "general": {
        "fields": {...fields},
        "rules": [
          ...rules
        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  },{
    "label": "Step",
    "name": "step",
    "addable": true,
    "settings": {
      "general": {
        "fields": {"title": "",...fields},
        "rules": [
          {"name": "title", "type": "string"},
          ...rules
        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  },
  {
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
  },
 {
    "label": "Button",
    "name": "button",
    "addable": true,
    "settings": {
      "general": {
        "fields": {"text": "", "action": "","float": "","borderRadius": "","fontSize":"13px","lineHeight":"1","iconImage":"","iconFont":"","iconPosition":"top","iconColor":"","fontWeight":"normal","border":"",...fields},
        "rules": [
          {"name": "text", "type": "string"},
          {"name": "action", "type": "string"},
          {"name": "float", "type": "string"},
          {"name": "fontSize", "type": "string"},
          {"name": "lineHeight", "type": "string"},
          {"name": "iconImage", "type": "image"},
          {"name": "iconFont", "type": "string"},
          {"name": "iconColor", "type": "string"},
          {"name": "iconPosition", "type": "string"},
          {"name": "fontWeight", "type": "string"},
          {"name": "borderRadius", "type": "string"},
          {"name": "border", "type": "string"},

          ...rules
        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  },
  {
    "label": "Row",
    "name": "row",
    "addable": true,
    "settings": {
      "general": {
        "fields": {"height":"",...fields},
        "rules": [
          {"name": "height", "type": "string"},

          ...rules
        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  }, {
    "label": "Col",
    "name": "col",
    "addable": true,
    "settings": {
      "general": {
        "fields": {"width": "",...fields},
        "rules": [
          {"name": "width", "type": "string"},
          ...rules
        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  }, {
    "label": "Html",
    "name": "html",
    "addable": true,
    "settings": {
      "general": {
        "fields": {"colCount": 1,...fields},
        "rules": [
          {"name": "colCount", "type": "number"},
          ...rules

        ]
      },
      "design": [{"name": "padding", "type": "string"}],
    }
  },

  {
    "label": "currency",
    "name": "currency",
    "addable": false,
    "settings": {
      "general": {
        "fields": {...fields},
        "rules": [
          ...rules
        ]
      },
      "design": [],
    }
  },{
    "label": "tsc",
    "name": "tsc",
    "addable": false,
    "settings": {
      "general": {
        "fields": {...fields},
        "rules": [
          ...rules
        ]
      },
      "design": [],
    }
  }];
export default FormOptions
