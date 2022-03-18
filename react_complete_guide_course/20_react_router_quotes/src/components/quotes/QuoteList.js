import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {

  const quotes = [];
  for(const quoteId in props.quotes)
  {
    quotes.push(<QuoteItem key={quoteId}
      id={quoteId}
      author={props.quotes[quoteId].author}
      text={props.quotes[quoteId].text}/>);
  }

  return <Fragment>
    <ul className={classes.list}>
        {quotes}
    </ul>
  </Fragment>

  /*
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
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
  */

};

export default QuoteList;
