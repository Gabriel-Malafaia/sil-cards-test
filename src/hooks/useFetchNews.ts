import { useEffect, useState } from "react";
import { api } from "../service/api";
import { AxiosError } from "axios";
import { INews } from "../interfaces";

export function useFetchNews() {
  const [news, setNews] = useState<INews[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await api.get<INews[]>("/news");
      setNews(response.data);
      setError(null);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { news, loading, error, fetchData };
}
