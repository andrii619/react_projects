
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";


import { useSelector } from "react-redux";


const AllQuotes = (props) => {
    const quotes = useSelector((state) =>
    {
      return state.quoteReducer.quotes;
    });
  
    const quoteNum = useSelector((state) =>
    {
      return state.quoteReducer.quoteNum;
    });


    return (quoteNum !==0 ? <QuoteList quotes={quotes}></QuoteList> : <NoQuotesFound></NoQuotesFound>) ;
};


export default AllQuotes;