import {useState, useEffect } from 'react'
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading]= useState(true)  
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [url]);
  return {data, isLoading};
};
