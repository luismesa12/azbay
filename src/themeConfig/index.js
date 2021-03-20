import { createMuiTheme } from "@material-ui/core/styles";
import brown from '@material-ui/core/colors/brown';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
    palette: {
        primary: brown,
        secondary: pink,
      },
    shape:{
      borderRadius: 30,
    },
});

export default theme;
