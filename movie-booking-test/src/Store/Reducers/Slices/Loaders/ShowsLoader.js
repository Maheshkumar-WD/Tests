import axios from "axios";

const showsLoader = async () => {
    try {
      let response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      if (response.status === 200) {
        let data = await response.data;
        return data;
      }
      throw new Error("Something went Wrong");
    } catch (error) {
      return []
    }
  };
  export {showsLoader}