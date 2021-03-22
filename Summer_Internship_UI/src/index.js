import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MyApp';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '1603.620px',
//   }
// }));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
/*
CRACKED BY ILLUMINATI
TRUST US AND UNCOMMENT THIS CODE ONCE YOU SETUP YOUR REDUX STORE ;-)
 ReactDOM.render(
   <Provider store={store}>
     <MuiThemeProvider theme={theme}>
       <App />
     </MuiThemeProvider>
   </Provider>,
   document.getElementById('root')
 );
*/
serviceWorker.unregister();


