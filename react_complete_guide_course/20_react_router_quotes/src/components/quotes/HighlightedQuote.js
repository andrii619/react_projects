import classes from './HighlightedQuote.module.css';

import { useParams } from 'react-router-dom';

const HighlightedQuote = (props) => {

  const params = useParams();

  const quote = props.quotes[params.quoteId];
  return (
    <figure className={classes.quote}>
      <p>{quote.text}</p>
      <figcaption>{quote.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
