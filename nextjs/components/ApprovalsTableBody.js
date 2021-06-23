import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from 'next/link';
import useApprovals from '../data/useApprovals';

export default function ApprovalsTableBody({ pageSize, pageNum }) {
  const { approvals, loading, error } = useApprovals({ pageSize, pageNum });

  if (loading) return 'loading...';
  if (error) return 'error...';

  return (
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
  );
}
