import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios(url)
      .then((res) => {
        setData(res.data.products)
        
      })
      .catch((err) => {
        console.log(err);

        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return [loading, error, data];
};

export default useFetch;
