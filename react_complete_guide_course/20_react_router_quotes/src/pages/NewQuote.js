

import QuoteForm from "../components/quotes/QuoteForm";
//import { quoteActions } from "../store/quote-slice";

//import { useDispatch, useSelector } from "react-redux";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import { useEffect } from "react";

import { useHistory } from "react-router-dom";

const NewQuote = (props) => {
  const {sendRequest, status} = useHttp(addQuote);
    //const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
      if(status === "completed")
      {
        

        history.replace("/quotes");
      }
    }, [status, history]);

    //const quotes = useSelector((state) =>
    //{
    //  return state.quoteReducer.quotes;
    //});
  
    const quoteAddHandler = (newQuote) => {
      // submit an action
      sendRequest(newQuote);
      ////dispatch(quoteActions.addQuote({id: quotes.length+1+"", author: newQuote.author, text: newQuote.text}));
    };
    return <QuoteForm isLoading={status==="pending"} onAddQuote={quoteAddHandler}></QuoteForm>;
};


export default NewQuote;