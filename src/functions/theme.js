import { createTheme } from '@mui/material/styles';

export default createTheme({
  typography: {
      direction: 'rtl',
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
      isRtl: true
  },
});
