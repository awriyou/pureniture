import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${apiUrl}api/products/`);
    //   console.log(response)
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    //   console.log(err)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
