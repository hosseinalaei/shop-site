import React, { useEffect } from 'react';
const useToken = () => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem('token');

      if (value) {
        return JSON.parse(value);
      } else {
        return '';
      }
    } catch (err) {
      return '';
    }
  });

  const setToken = (newValue) => {
   useEffect(() =>{
     
      window.localStorage.setItem('token', JSON.stringify(newValue));
    setStoredValue(newValue);
  
   },[])
  }
  
  return [storedValue, setToken];
};
export default useToken;