import React from 'react';
import {
  withStyles,
  makeStyles,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function CustomizedTables({ menus }) {
  menus = menus || [
    { name: 'lunch menu' },
    { name: 'dinner menu' },
    { name: 'drinks' },
    { name: 'bar quick screen' },
    { name: 'retail' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menus.map((menu) => (
            <StyledTableRow key={menu.name}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ cursor: 'pointer', color: 'darkblue' }}
              >
                {menu.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton style={{ width: 30, height: 30 }}>
                  <MoreHoriz />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
