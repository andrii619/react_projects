
import {useState, useCallback} from "react";



function useHttp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    //console.log("usehttp");
    const sendRequest = useCallback(async (requestConfig, dataTransform) => {
      console.log("here1");
      setIsLoading(true);
      setError(null);
      console.log("here2");
      try {
        const response = await fetch(
          //'https://react-test-7bc77-default-rtdb.firebaseio.com/tasks.json'
          requestConfig.url, {
              method: requestConfig.method ? requestConfig.method : "GET",
              body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
              headers: requestConfig.headers ? requestConfig.headers : {}
          }
        );
          //console.log("1");
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        //console.log("2");
        console.log("data", data);
        dataTransform(data);// transform the data and also bind the data to a state
  
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }, []);


    /////sendRequest();

    return {isLoading, error, sendRequest};
}


export default useHttp;