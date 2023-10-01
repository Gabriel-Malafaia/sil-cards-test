import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { INews, INewsResponse } from "../interfaces";
import { lower } from "../service/utils";
import { api } from "../service/api";

interface IProps {
  item: INews;
  initialCodeData?: string;
}

export function useFetchData({ item, initialCodeData }: IProps) {
  const [value, setValue] = useState<INewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null | string>(null);

  async function fetchData(codeData?: string) {
    if (item.infos.length === 0) {
      return;
    }

    setLoading(true);

    try {
      const about = lower(item.about);
      const code = lower(codeData);
      const url = `/${about}-${code}`;

      const response = await api.get(url);

      setValue(response.data);
      setError(null);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(initialCodeData || item.infos[0]);
  }, [initialCodeData, item]);

  return {
    value,
    loading,
    error,
    fetchData,
  };
}
