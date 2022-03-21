

import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import {Link } from "react-router-dom"
import { useParams, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

//import useHttp from "../hooks/use-http";
//import { getSingleQuote } from "../lib/api";

import { Fragment } from "react";

const QuoteDetail = (props) => {
    const params = useParams();
    const match = useRouteMatch();
    //const quoteId = params.quoteId;

    const quotes = useSelector((state) =>
    {
      return state.quoteReducer.quotes;
    });

    //const quote = quotes[params.quoteId];
    const quote = quotes.find((quote) => {return quote.id === params.quoteId});
    //console.log(params.quoteId);
    console.log("p ", params.quoteId)
    if(!quote)
    {
      // return some fallback content like quote not found
      return <p>No quote found</p>;
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
        {/*
        <Route path={"/quotes/" + params.quoteId} exact={true}>
         */}
        <Route path={match.path} exact={true}>
          <div className="centered"><Link to={match.url + "/comments"} className="btn--flat">Load Comments</Link></div>
        </Route>
        
        <Route path={`${match.path}/comments`}>
          <Comments/>
        </Route>
        
    </Fragment>;
};


export default QuoteDetail;





