import useSWR from 'swr';
import { fetcher } from '@/lib/helpers';

export const useMemoTest = () => {
  const { data, error } = useSWR('/api/memo-tests', fetcher);

  return {
    memoTests: data,
    isLoading: !error && !data,
    isError: error,
  };
};
