import { createMuiTheme } from "@material-ui/core/styles";
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#c1a488',
          main: '#8f542b',
          dark: '#b78753',
        },
        secondary: pink,
      },
    shape:{
      borderRadius: 30,
    },
    overrides:{
      
    },
});

export default theme;
