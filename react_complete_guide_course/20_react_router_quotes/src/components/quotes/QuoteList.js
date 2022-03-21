import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';



const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    console.log("sorting ");
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  /*
  const quotes = [];
  for(const quoteId in props.quotes)
  {
    quotes.push(<QuoteItem key={quoteId}
      id={quoteId}
      author={props.quotes[quoteId].author}
      text={props.quotes[quoteId].text}/>);
  }
  
  return <Fragment>
    <div className={classes.sorting}>
      <button>Sorting order</button>
    </div>
    <ul className={classes.list}>
        {quotes}
    </ul>
  </Fragment>
  */

  //console.log("location ", location);

  const queryParams = new URLSearchParams(location.search);

  const isSortAscending = queryParams.get("sort") === "asc";

  //console.log("sort asc ", isSortAscending);

  const changeSortingHandler = (event) => {

    history.push({
      pathname: location.pathname,
      search: "?sort=" + (isSortAscending ? "desc" : "asc")
    })

    //history.push(location.pathname + "?sort=" + (isSortAscending ? "desc" : "asc"));
  };

  const sortedQuotes = [...props.quotes];

  // cannot pass props.quotes as a param to sorting. sorting method will try to write directly to the quotes array which is
  // stored in redux store, this is not allowed. need to make a local copy first and then sort
  sortQuotes(sortedQuotes, isSortAscending);

  //console.log("sorted ", sortedQuotes);
  
  return (
    <Fragment>
    <div className={classes.sorting}>
      <button onClick={changeSortingHandler}>Sort {isSortAscending ? "Descending" : "Ascending"}</button>
    </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
  

};

export default QuoteList;
