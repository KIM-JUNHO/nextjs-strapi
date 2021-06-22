import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';

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
          {requests.length > 0 &&
            requests.map(({ id, created_at, user: { username }, expireDate, comment }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  <Link href="/requests/[id]" as={`/requests/${id}`}>
                    <a>{id}</a>
                  </Link>
                </TableCell>
                <TableCell>{created_at}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>{expireDate}</TableCell>
                <TableCell>{comment}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
