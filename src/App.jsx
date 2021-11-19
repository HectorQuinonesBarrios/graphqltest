import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from './components/CardHeader';
import TextSelector from './components/TextSelector';
import ItemList from './components/ItemList';
import Wrapper from './components/Wrapper';
import { setDates, getInfo } from './redux/actions';

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

const styles = {
  card: {
    margin: '5% 25%',
  },
  picker: {
    float: 'right',
  },
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      today: moment(),
    };
  }

  handleChange = (newValue) => {
    const { props } = this;
    props.setDates(newValue);
    props.getInfo();
  };

  render() {
    const { today } = this.state;
    const { selectMetric, dates } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Wrapper>
          <Card style={styles.card}>
            <CardHeader title="Metric" />
            <CardContent>
              <TextSelector />
              <div style={styles.picker}>
                {selectMetric !== 'None' && (
                  <DateRangePicker
                    disablePast
                    value={dates}
                    minDate={undefined}
                    maxDate={today}
                    onChange={(newValue) => {
                      this.handleChange(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <>
                        <TextField
                          label={startProps.label}
                          inputProps={startProps.inputProps}
                          focused={startProps.focused}
                          error={startProps.error}
                          disabled={startProps.disabled}
                        />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField
                          label={endProps.label}
                          inputProps={endProps.inputProps}
                          focused={endProps.focused}
                          error={endProps.error}
                          disabled={endProps.disabled}
                        />
                      </>
                    )}
                  />
                )}
              </div>
              <ItemList />
            </CardContent>
          </Card>
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setDates: dates => dispatch(setDates(dates)),
  getInfo: () => dispatch(getInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
