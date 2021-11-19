import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { MenuItem, Select } from '@material-ui/core';
import { connect } from 'react-redux';
import CardHeader from './CardHeader';
import { getMetrics, setMetric } from '../redux/actions';

const styles = {
  card: {
    margin: '5% 25%',
  },
  content: {
    margin: '10px 10px',
  },
};

class TextSelector extends React.PureComponent {
  componentDidMount = () => {
    const { props } = this;
    props.getMetrics();
  };

  handleChange = (selection) => {
    this.setMetric(selection);
  };

  render() {
    const { metrics, selectMetric } = this.props;
    console.log(metrics);
    return (
      <Card style={styles.card}>
        <CardHeader title="Metric" />
        <CardContent>
          Select
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectMetric}
            onChange={(value, newValue) => this.handleChange(value, newValue)}
            style={styles.content}
            defaultValue=""
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {metrics && metrics.map && metrics.map((metric) => (
              <MenuItem value="">
                <em>{ metric }</em>
              </MenuItem>
            ))}
          </Select>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getMetrics: () => dispatch(getMetrics()),
  setMetric: text => dispatch(setMetric(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextSelector);
