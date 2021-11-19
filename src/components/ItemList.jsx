import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Pagination,
  Stack,
} from '@mui/material';
import { connect } from 'react-redux';
import moment from 'moment';

class ItemList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      page: 1,
    };
  }

  handleChange = (value) => {
    this.setState({
      offset: 15 * (value - 1),
      page: value,
    });
  };

  render() {
    const { info, selectMetric } = this.props;
    const { offset, page } = this.state;
    const paginated = info.slice(offset, 15 * page);
    const pages = Math.ceil(info.length / 15);
    return (
      <div styles={{ width: '100%' }}>
        {info && info.length !== 0 && (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell align="center">Value</TableCell>
                    <TableCell align="center">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated && paginated.map && paginated.map((row) => (
                    <TableRow
                      key={`${row.value}${row.at}`}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {selectMetric}
                      </TableCell>
                      <TableCell align="center">{row.value}{row.unit}</TableCell>
                      <TableCell align="center">{moment(row.at).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack spacing={2} style={{ margin: '0 auto', padding: '20px', width: '60%' }}>
              <Pagination count={pages} shape="rounded" onChange={(e, value) => this.handleChange(value)} />
            </Stack>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ItemList);
