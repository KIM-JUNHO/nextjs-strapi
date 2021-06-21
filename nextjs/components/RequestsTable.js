import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function RequestsTable({ requests }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>RequestDate</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>ExpireDate</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.created_at}</TableCell>
              <TableCell>{row.user.username}</TableCell>
              <TableCell>{row.expireDate}</TableCell>
              <TableCell>{row.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
