import {useState} from "react";
import useInput from "../hooks/use-input";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateName(name){
  return name.trim() !== "";
}

const SimpleInput = (props) => {
  console.log("in simple input");
  const {
    value: enteredName,
    isValid: nameValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurrHandler:nameInputBlurrHandler,
    reset: nameInputReset
  } = useInput(validateName);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const emailValid = validateEmail(enteredEmail);
  const emailInputIsInvalid = !emailValid && emailTouched;

  let formValid = nameValid && emailValid;


  function emailChangeHandler(event) {
    const email = event.target.value;
    setEnteredEmail(email);
    setEmailTouched(true);
  }

  function formSubmissionHandler(event)
  {
    event.preventDefault();
    //setNameTouched(true);
    setEmailTouched(true);
    if(!formValid)
    {
      return;
    }
    
    //console.log(enteredName);
    //const enteredValue = nameInputRef.current.value;
    //console.log(enteredValue);
    nameInputReset();
    setEnteredEmail("");
    setEmailTouched(false);
    //nameInputRef.current.value = ""; don't do this manipultes the dom node directly
  };


  function emailInputBlurrHandler(event) {
    setEmailTouched(true);
  }


  const nameInputClasses = !nameHasError ? "form-control" : "form-control invalid";
  const emailInputClasses = !emailInputIsInvalid ? "form-control" : "form-control invalid";



  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
            onChange={nameChangeHandler} value={enteredName} onBlur={nameInputBlurrHandler}/>
        {nameHasError && <p className='error-text'>Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' 
            onChange={emailChangeHandler} value={enteredEmail} onBlur={emailInputBlurrHandler}/>
        {emailInputIsInvalid && <p className='error-text'>Email is invalid</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
