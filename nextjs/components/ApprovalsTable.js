import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';

export default function ApprovalsTable({ approvals }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Created_At</TableCell>
            <TableCell>Updated_At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {approvals.map(({ id, type, status, user: { username }, created_at, updated_at }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell>{type}</TableCell>
              <TableCell>{status}</TableCell>
              <TableCell>{username}</TableCell>
              <TableCell>{created_at}</TableCell>
              <TableCell>{updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
