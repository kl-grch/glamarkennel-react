import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useDogs() {
  const { data, error, isLoading } = useSWR(`/api/dogs.json`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
