

import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

import { Fragment } from "react";

const QuoteDetail = (props) => {
    const params = useParams();
    //const quoteId = params.quoteId;

    const quotes = useSelector((state) =>
    {
      return state.quoteReducer.quotes;
    });
    console.log(params.quoteId);
    return <Fragment>
        <HighlightedQuote quotes={quotes}></HighlightedQuote>
        <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments/>
        </Route>
        
    </Fragment>;
};


export default QuoteDetail;





