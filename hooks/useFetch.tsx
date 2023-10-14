import { useEffect, useState } from "react";

interface UseFetchParams<T> {
  api: () => Promise<T>;
}

export function useFetch<T>(params: UseFetchParams<T>) {
  const { api } = params;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await api();
        if (res) {
          setData(res);
        }
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return {
    isError,
    isLoading,
    data,
  };
}
