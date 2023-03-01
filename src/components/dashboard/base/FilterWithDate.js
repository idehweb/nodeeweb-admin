// import React from "react";
//
// import TextField from "@mui/material/TextField";
// import AdapterJalali from "@date-io/date-fns-jalali";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { useInput } from "react-admin";
//
// const FilterWithDate = (props) => {
//   const [value, setValue] = React.useState("");
//   const { onChange, onBlur, ...rest } = props;
//   // const {
//   //   field,
//   //   fieldState: { isTouched, invalid, error },
//   //   formState: { isSubmitted },
//   //   isRequired
//   // } = useInput({
//   //   onChange,
//   //   onBlur,
//   //   ...props
//   // });
//
//   return (
//     <LocalizationProvider dateAdapter={AdapterJalali}>
//       <DatePicker
//         mask="____/__/__"
//         value={value}
//         onChange={(newValue) => setValue(newValue)}
//         renderInput={(params) => <TextField onChange={(newValue) => setValue(newValue)}
//         />}
//       />
//     </LocalizationProvider>
//   );
// };
// export default FilterWithDate;
import * as React from 'react';
import AdapterJalali from "@date-io/date-fns-jalali";
import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslate } from "react-admin";

export default function FilterWithDate(props) {
  const {type,handlerChangeFilter} = props;
  const [value, setValue] = React.useState(null);
  const translate = useTranslate();

  return (
      <LocalizationProvider dateAdapter={AdapterJalali}>
        <span style={{position:'relative',top:'8px'}}>
          <DatePicker
            className={type}
            label={translate("pos.filter."+type)}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              handlerChangeFilter(newValue,type)
            }}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </span>
      </LocalizationProvider>
  );
}