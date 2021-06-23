import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RulesTableBody from './RulesTableBody';

export default function RulesTable() {
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(0);

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
        <RulesTableBody pageSize={pageSize} pageNum={pageNum} />
      </Table>
      <div style={{ display: 'none' }}>
        <RulesTableBody pageSize={pageSize} pageNum={pageNum + 1} />
      </div>
      <button onClick={() => setPageNum(pageNum - 1)}>Previous</button>
      <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
    </TableContainer>
  );
}
