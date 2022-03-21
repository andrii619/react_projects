import { Fragment, useRef } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

import { useState } from 'react';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [formStarted, setFormStarted] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    console.log(enteredAuthor, enteredText);
    if(enteredText.trim() !== "" && enteredAuthor.trim() !== "")
    {
      props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }
    //
  }

  const onFocusHandler = (event) => {
    setFormStarted(true);
  };

  const finishEnteringHandler= (event) => {
    setFormStarted(false);
  }

  return (
    <Fragment>
      <Prompt when={formStarted} message={ (location)=>{
        console.log("leaving from to ", location);
        return "Are you sure you want to leave?";
      }  }/>
      <Card>
        <form onFocus={onFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={finishEnteringHandler}>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
