import { createMuiTheme } from '@material-ui/core/styles';

export const pxToRem = px => `${px / 22.5}rem`;
export const pxToVw = px =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = px =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      light: 'rgb(93,175,240,0.5)',
      dark: 'rgb(93,175,240,0.2)'
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        color: '#ffffff',
      },
    },
    MuiSvgIcon: {
      root: {
        color: '#ffffff',
        background: '#2A3E4C'
      }
    },
    MuiPaper: {
      root: {
        color: '#ffffff',
        background: '#2A3E4C'
      }
    },
    MuiPickersBasePicker: {
      pickerView: {
        color: '#ffffff',
        background: '#2A3E4C'
      }
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        // background: '#2A3E4C',
        backgroundColor: '#2A3E4C',
      }
    },
    MuiTableCell: {
      stickyHeader: {
        backgroundColor: '#273D49CC',
      },
      root: {
        borderBottom: 'none'
      }
    },
    MuiMenu: {
      list: {
        background: '#2A3E4C',
      }
    },
  },
  
});
