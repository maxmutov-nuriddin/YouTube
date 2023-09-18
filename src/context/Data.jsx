/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import axios from 'axios'

export const FetchContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/playlist/videos/',
    params: {
      id: 'PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'a5846e8f80msheb39e293bfad4a0p1e7294jsn6528494f1ca8',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data.contents);
    }).catch(function (error) {
      console.error(error);
    })
  }, []);

  return (
    <FetchContext.Provider value={{ data }}>
      {children}
    </FetchContext.Provider>
  )
}
