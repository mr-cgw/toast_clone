import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
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

export default function CustomizedTables({ menus, dish, tableType }) {
  menus = menus || [
    { name: 'lunch menu', id: '1', type: 'menu' },
    { name: 'dinner menu', id: '2', type: 'menu' },
    { name: 'drinks', id: '3', type: 'menu' },
    { name: 'bar quick screen', id: '4', type: 'menu' },
    { name: 'retail', id: '5', type: 'menu' },
  ];
  const history = useHistory();
  let params = useParams();
  console.log("dish", dish);
  console.log("menus", menus)
  console.log("params", params)
  const tableHeader = () => {
    if (tableType === "menus" || tableType === "groups") {
      return (
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">
          </StyledTableCell>
        </TableRow>
      )
    } else if (tableType === "dishes") {
      return (
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">
            Prices
          </StyledTableCell>
        </TableRow>
      )
    } else if (tableType === "modifiers") {
      return (
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell>Required</StyledTableCell>
          <StyledTableCell align="right">
            Prices
          </StyledTableCell>
        </TableRow >
      )
    }
  }
  const tableItem = (item) => {
    if (tableType === "menus" || tableType === "groups") {
      return (
        <StyledTableRow key={item.name}>
          <StyledTableCell
            component="th"
            scope="row"
            style={{ cursor: 'pointer', color: 'darkblue' }}
            onClick={() => history.push(`/${item.type}/${item.id}`)}
          >
            {item.name}
          </StyledTableCell>
          <StyledTableCell align="right">
            <IconButton style={{ width: 30, height: 30 }}>
              <MoreHoriz />
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>
      )
    } else if (tableType === "dishes") {
      return (
        <StyledTableRow key={item.name}>
          <StyledTableCell
            component="th"
            scope="row"
            style={{ cursor: 'pointer', color: 'darkblue' }}
            onClick={() => history.push(`/group/${params.groupId}/dish/${item.id}`)}
          >
            {item.name}
          </StyledTableCell>
          <StyledTableCell align="right">
            {'$' + item.price}
          </StyledTableCell>
        </StyledTableRow>
      )
    } else if (tableType === "modifiers") {
      return (
        <StyledTableRow key={item.name}>
          <StyledTableCell
            component="th"
            scope="row"
            style={{ cursor: 'pointer', color: 'darkblue' }}
            onClick={() => history.push(`/${item.type}/${item.id}`)}
          >{item.name}
          </StyledTableCell>
          <StyledTableCell>
            {item.required ? "Y" : "N"}
          </StyledTableCell>

          <StyledTableCell align="right">
            {'$' + item.price}
          </StyledTableCell>
        </StyledTableRow>

      )
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          {tableHeader()}

        </TableHead>
        <TableBody>
          {menus.map((menu) => (
            tableItem(menu)
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


