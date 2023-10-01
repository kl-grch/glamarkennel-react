import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useResults() {
  const { data, error, isLoading } = useSWR(`/api/results.json`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
