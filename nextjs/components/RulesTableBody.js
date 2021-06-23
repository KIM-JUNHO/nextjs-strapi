import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from 'next/link';
import useRules from '../data/useRules';

export default function RulesTableBody({ pageSize, pageNum }) {
  const { rules, loading, error } = useRules({ pageSize, pageNum });

  return (
    <TableBody>
      {loading && 'loading'}
      {error && 'error'}
      {!loading &&
        !error &&
        rules.length > 0 &&
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
  );
}
