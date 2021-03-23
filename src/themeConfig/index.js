import { createMuiTheme } from "@material-ui/core/styles";
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: blue,
      },
    shape:{
      borderRadius: 30,
    },
    overrides:{
      
    },
});

export default theme;
