import React from 'react';
import {
  Paper,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
} from '@material-ui/core';
import { TableHeader } from './TableHeader';

interface Props {
  headers: string[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableComponent({ headers, children }: React.PropsWithChildren<Props>) {
  const classes = useStyles();
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: '80%', marginLeft: '10%' }}
    >
      <Table className={classes.table} aria-label='simple table'>
        <TableHeader headers={headers} />
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
