import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useRequests from '../data/useRequests';
import Link from 'next/link';

export default function RequestsTable() {
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(0);
  const { requests, loading, error } = useRequests({ pageSize, pageNum });
  const {} = useRequests({ pageSize, pageNum: pageNum + 1 });

  if (loading) return 'loading...';
  if (error) return 'error...';

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>RequestDate</TableCell>
            <TableCell>ExpireDate</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.length > 0 &&
            requests.map(({ id, created_at, expireDate, comment, status }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  <Link href="/requests/[id]" as={`/requests/${id}`}>
                    <a>{id}</a>
                  </Link>
                </TableCell>
                <TableCell>{created_at}</TableCell>
                <TableCell>{expireDate}</TableCell>
                <TableCell>{comment}</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <button onClick={() => setPageNum(pageNum - 1)}>Previous</button>
      <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
    </TableContainer>
  );
}
