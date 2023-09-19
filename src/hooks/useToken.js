import React, { useEffect } from 'react';
const useToken = () => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem('user');

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
    //   useEffect(() =>{
       console.log(newValue)
     
      window.localStorage.setItem('user', JSON.stringify(newValue));
    // setStoredValue(newValue);
  
//    },[newValue])
  }
  
  return [storedValue, setToken];
};
export default useToken;