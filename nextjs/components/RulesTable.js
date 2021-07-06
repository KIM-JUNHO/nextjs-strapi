import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useRules from '../data/useRules';
import Link from 'next/link';

export default function RulesTable() {
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(0);
  const { data, loading, error } = useRules({ pageSize, pageNum });
  const {} = useRules({ pageSize, pageNum: pageNum + 1 });

  if (loading) return 'loading...';
  if (error) return 'error...';

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
          {data.length > 0 &&
            data.map(({ id, srcAddr, dstAddr, dstPort, comment, created_at }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {id}
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
      <button onClick={() => setPageNum(pageNum - 1)}>Previous</button>
      <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
    </TableContainer>
  );
}
