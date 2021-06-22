import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function RuleTable({
  rule: { id, srcAddr, dstAddr, dstPort, comment, created_at },
}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>SrcAddr</TableCell>
            <TableCell>DstAddr</TableCell>
            <TableCell>DstPort</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell>Created_At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={id}>
            <TableCell component="th" scope="row">
              <a>{id}</a>
            </TableCell>
            <TableCell>{srcAddr}</TableCell>
            <TableCell>{dstAddr}</TableCell>
            <TableCell>{dstPort}</TableCell>
            <TableCell>{comment}</TableCell>
            <TableCell>{created_at}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
