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
  handleChange = (selection) => {
    this.setMetric(selection);
  };

  render() {
    const { metrics } = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader title="Metric" />
        <CardContent>
          Select
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={setMetric}
            onChange={this.handleChange}
            style={styles.content}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {metrics && metrics.map((metric) => (
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

const mapDispatchToProps = () => ({
  getMetrics,
  setMetric,
});

export default connect(mapStateToProps, mapDispatchToProps)(TextSelector);
