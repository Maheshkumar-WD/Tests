import { useEffect, useState } from "react";

const useFetchUser = (url) => {
  let [user, setUser] = useState(null);
  let fetchUser = async () => {
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      let data = await response.json();
      setUser(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return user;
};
export { useFetchUser };
