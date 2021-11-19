import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { connect } from 'react-redux';
import moment from 'moment';

class ItemList extends React.PureComponent {
  render() {
    const { info, selectMetric } = this.props;
    return (
      <div styles={{ width: '100%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Metric</TableCell>
                <TableCell align="right">Value</TableCell>
                <TableCell align="right">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info && info.map && info.map((row) => (
                <TableRow
                  key={row.value}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {selectMetric}
                  </TableCell>
                  <TableCell align="right">{row.value}{row.unit}</TableCell>
                  <TableCell align="right">{moment(row.at)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ItemList);
