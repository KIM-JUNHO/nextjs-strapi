import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function RequestTable({ request: { id, created_at, expireDate, comment } }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>RequestDate</TableCell>
            <TableCell>ExpireDate</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={id}>
            <TableCell component="th" scope="row">
              {id}
            </TableCell>
            <TableCell>{created_at}</TableCell>
            <TableCell>{expireDate}</TableCell>
            <TableCell>{comment}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
