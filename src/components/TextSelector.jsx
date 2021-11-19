import React from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { connect } from 'react-redux';
import { getMetrics, setMetric } from '../redux/actions';

const styles = {
  content: {
    margin: '10px 10px',
  },
};

class TextSelector extends React.PureComponent {
  componentDidMount = () => {
    const { props } = this;
    props.getMetrics();
  };

  handleChange = (selector, selection) => {
    const { props } = this;
    props.setMetric(selection.props.value);
  };

  render() {
    const { metrics, selectMetric } = this.props;
    return (
      <>
        Select
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectMetric}
          onChange={(value, newValue) => this.handleChange(value, newValue)}
          style={styles.content}
          defaultValue="None"
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {metrics && metrics.map && metrics.map((metric) => (
            <MenuItem key={metric} value={metric}>
              <em>{ metric }</em>
            </MenuItem>
          ))}
        </Select>
      </>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getMetrics: () => dispatch(getMetrics()),
  setMetric: text => dispatch(setMetric(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextSelector);
