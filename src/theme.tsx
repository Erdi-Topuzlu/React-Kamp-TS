import { createTheme } from '@mui/material/styles';
import { red, deepPurple, amber } from '@mui/material/colors';


// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: deepPurple[500],
      dark: '#002884',
      contrastText: amber[500],

    },
    mode: 'light',
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
