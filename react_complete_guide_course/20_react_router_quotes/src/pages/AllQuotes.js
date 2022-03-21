import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { useDispatch } from "react-redux";
import { quoteActions } from "../store/quote-slice";

import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";

import LoadingSpinner from "../components/UI/LoadingSpinner";
//import { useSelector } from "react-redux";

import { useEffect } from "react";

const AllQuotes = (props) => {
  const dispatch = useDispatch();
  //const quotes = useSelector((state) =>
  //{
  //  return state.quoteReducer.quotes;
  //});

  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  //const quoteNum = useSelector((state) =>
  //{
  //  return state.quoteReducer.quoteNum;
  //});
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (status === "completed") {
      console.log("loaded quotes: ", loadedQuotes);
      dispatch(quoteActions.setQuotes(loadedQuotes));
    }
  }, [status, dispatch, loadedQuotes]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else if (error) {
    return <p className="centered focused">{error}</p>;
  } else if (
    status === "completed" &&
    (!loadedQuotes || loadedQuotes.length === 0)
  ) {
    return <NoQuotesFound />;
  } else {
    return <QuoteList quotes={loadedQuotes} />;
  }
  //else
  //{
  //  return (quotes.length !==0 ? <QuoteList quotes={quotes}></QuoteList> : <NoQuotesFound></NoQuotesFound>) ;
  //}
};

export default AllQuotes;
