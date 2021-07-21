import { TableHead, TableRow, TableCell } from "@material-ui/core";

interface Props {
  headers: string[];
}

export const TableHeader = ({ headers }: Props) => (
  <TableHead>
    <TableRow>
      {headers.map((header,index) => (
        <TableCell key={index} align="left" style={{fontWeight:"bold"}}>{header}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);
