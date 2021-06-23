import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useApprovals from '../data/useApprovals';
import Link from 'next/link';

export default function ApprovalsTable() {
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(0);
  const { approvals, loading, error } = useApprovals({ pageSize, pageNum });
  const {} = useApprovals({ pageSize, pageNum: pageNum + 1 });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

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
          {approvals.length > 0 &&
            approvals.map(({ id, type, status, created_at, updated_at }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  <Link href="/approvals/[id]" as={`/approvals/${id}`}>
                    <a>{id}</a>
                  </Link>
                </TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{status}</TableCell>
                <TableCell>{created_at}</TableCell>
                <TableCell>{updated_at}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <button onClick={() => setPageNum(pageNum - 1)}>Previous</button>
      <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
    </TableContainer>
  );
}
