import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import State from './redux/state';
import TextSelector from './components/TextSelector';
import Wrapper from './components/Wrapper';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

class App extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Wrapper>
          <TextSelector />
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = (state: State) => state;

export default connect(mapStateToProps)(App);
