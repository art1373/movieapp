import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Config } from "../Config";

const useFetch = (url, options, setData) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let baseUrl = `${Config.API_URL}${url}?${Config.API_KEY}&language=en-US&page=1`;
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const json = await Axios.get(baseUrl);
        if (!signal.aborted) {
          setResponse(json);
          setData(json);
        }
      } catch (e) {
        console.log({ e });
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    doFetch();
    return () => {
      abortController.abort();
    };
  }, []);
  return { response, error, loading };
};
export default useFetch;
