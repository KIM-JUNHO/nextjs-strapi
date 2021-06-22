import useSWR from 'swr';
import { getApprovals } from '../api/approvalApi';

export default function useApprovals() {
  const { data, mutate, error } = useSWR('/approvals', getApprovals);

  const loading = !data && !error;

  return {
    loading,
    error,
    approvals: data,
    mutateApprovals: mutate,
  };
}
