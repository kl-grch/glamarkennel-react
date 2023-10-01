import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useLitters() {
  const { data, error, isLoading } = useSWR(`/api/litters.json`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
