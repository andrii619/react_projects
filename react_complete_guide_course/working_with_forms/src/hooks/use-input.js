

import {useState} from "react";



const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    console.log("in use Input hook");

    function valueChangeHandler(event) {
        setEnteredValue( event.target.value);
        //setIsTouched(true);
      };
      console.log("here1");
    
    function inputBlurrHandler(event)
    {
      setIsTouched(true);
    };
    console.log("here2");
    function reset()
    {
        setEnteredValue("");
        setIsTouched(false);
    }
    console.log("here3");

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurrHandler,
        reset
    }
};

export default useInput;