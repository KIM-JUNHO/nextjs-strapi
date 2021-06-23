import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from 'next/link';
import useRequests from '../data/useRequests';

export default function RequestsTableBody({ pageSize, pageNum }) {
  const { requests, loading, error } = useRequests({ pageSize, pageNum });

  if (loading) return 'loading...';
  if (error) return 'error...';

  return (
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
  );
}
