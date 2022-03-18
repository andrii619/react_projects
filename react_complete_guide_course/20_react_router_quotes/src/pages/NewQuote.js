

import QuoteForm from "../components/quotes/QuoteForm";
import { quoteActions } from "../store/quote-slice";

import { useDispatch, useSelector } from "react-redux";

const NewQuote = (props) => {
    const dispatch = useDispatch();


    const quoteNum = useSelector((state) =>
    {
      return state.quoteReducer.quoteNum;
    });
  
    const quoteAddHandler = (newQuote) => {
      // submit an action
      dispatch(quoteActions.addQuote({id: quoteNum+1, author: newQuote.author, text: newQuote.text}));
    };
    return <QuoteForm onAddQuote={quoteAddHandler}></QuoteForm>;
};


export default NewQuote;