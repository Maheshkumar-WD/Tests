import { useEffect, useState } from "react";

let useAllTransactions = (userToken) => {
  let [transactions, setTransactions] = useState([]);
  let [error, setError] = useState(null);
  let fetchRequest = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_ACCOUNT + `/transactions/${userToken}.json`
      );
      if (!response.ok) {
        throw new Error("Something went Wrong!");
      }
      let data = await response.json();
      let updatedTransactions = Object.keys(data).map((tran) => {
        return {
          ...data[tran],
          id: tran,
        };
      });
      setTransactions(updatedTransactions);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  return [transactions, error];
};
export { useAllTransactions };
