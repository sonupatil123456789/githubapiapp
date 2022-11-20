import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [githubuser, setGithubUser] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchAllGithubUser = () => {
    axios({
      method: "get",
      url: url,
    })
      .then((response) => {
        setGithubUser(response.data);
        setLoading(false)
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllGithubUser()
  }, [url]);

  return [githubuser , loading];
};

export default useFetch;