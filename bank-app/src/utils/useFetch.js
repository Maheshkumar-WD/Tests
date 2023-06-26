import { useState } from "react";

const useFetch = () => {
  let [apiData, setApi] = useState({
    data: null,
    error: null,
  });
  let sendRequest = async (url, method, body) => {
    try {
      let response = await fetch(url, {
        method: method ? method : "GET",
        headers: { "Content-Type": "application/json" },
        body: body && null,
      });
      if (!response.ok) {
        throw new Error("Request Failed");
      }
      let data = await response.json();
      setApi((prev) => {
        return { ...prev, data };
      });
    } catch (error) {
      setApi((prev) => {
        return { ...prev, error: error.message };
      });
    }
    return apiData;
  };

  return sendRequest;
};

export default useFetch;
