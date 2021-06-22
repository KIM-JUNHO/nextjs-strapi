import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';

export default function RulesTable({ rules }) {
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
          {rules.length > 0 &&
            rules.map(({ id, srcAddr, dstAddr, dstPort, comment, created_at }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  <Link href="/rules/[id]" as={`/rules/${id}`}>
                    <a>{id}</a>
                  </Link>
                </TableCell>
                <TableCell>{srcAddr}</TableCell>
                <TableCell>{dstAddr}</TableCell>
                <TableCell>{dstPort}</TableCell>
                <TableCell>{comment}</TableCell>
                <TableCell>{created_at}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
