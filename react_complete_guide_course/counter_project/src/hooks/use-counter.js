import {useState, useEffect} from "react";


const useCounter = (initialValue=0, amount=1) => {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + amount);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [amount]);

    return counter;
};


export default useCounter;