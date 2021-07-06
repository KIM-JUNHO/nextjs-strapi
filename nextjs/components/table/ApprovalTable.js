import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useApproval from '../../data/useApproval';

export default function ApprovalTable({ id }) {
  const { data, loading, error } = useApproval({ id });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

  const { type, status, created_at, updated_at } = data;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created_At</TableCell>
            <TableCell>Updated_At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={id}>
            <TableCell component="th" scope="row">
              {id}
            </TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{created_at}</TableCell>
            <TableCell>{updated_at}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
