import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  withStyles,
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

export default function CustomizedTables({ menus, dish }) {
  menus = menus || [
    { name: 'lunch menu', id: '1', type: 'menu' },
    { name: 'dinner menu', id: '2', type: 'menu' },
    { name: 'drinks', id: '3', type: 'menu' },
    { name: 'bar quick screen', id: '4', type: 'menu' },
    { name: 'retail', id: '5', type: 'menu' },
  ];
  const history = useHistory();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">
              {dish ? 'prices' : ''}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menus.map((menu) => (
            <StyledTableRow key={menu.name}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ cursor: 'pointer', color: 'darkblue' }}
                onClick={() => history.push(`/${menu.type}/${menu.id}`)}
              >
                {menu.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {dish ? (
                  '$' + menu.price
                ) : (
                  <IconButton style={{ width: 30, height: 30 }}>
                    <MoreHoriz />
                  </IconButton>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
