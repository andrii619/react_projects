import { createSlice } from "@reduxjs/toolkit";



//const INITIAL = {quotes: {q1: {author: "Andrii", text: "meow"}, q2: {author: "Andrii", text: "moew"} }, quoteNum: 2  };

// {quotes: {q1: {}, q2: {}, ...}   } index by id
// quote: {text: "schme", author: "Andrii"}

const INITIAL2 = { quotes: [] };


const quoteSlice = createSlice({name:"quote-slice",
    initialState: INITIAL2,
    reducers:{
        addQuote(state, action)
        {
            const newQuote = {id: action.payload.id, author: action.payload.author, text: action.payload.text};
            const newQuoteId = action.payload.id;
            //if(state.quotes[newQuoteId])
            if(state.quotes.find( (quote) => {return quote.id === newQuoteId;}) )
            {
                console.log("Connot add quote with same ID");
                return;
            }
            // add new quote to list
            //state.quotes[newQuoteId] = newQuote;
            //state.quoteNum++;
            state.quotes.push(newQuote);
        },
        removeQuote(state, action)
        {
            /*
            if(state.quotes[action.payload.id])
            {
                delete state.quotes[action.payload.id];
                state.quoteNum--;
            }
            */
        },
        setQuotes(state, action)
        {
            state.quotes = action.payload;
        },
        clearQuotes(state)
        {
            state.quotes = [];
            //state.quoteNum = 0;
        }
    }
});


export const quoteActions = quoteSlice.actions;

export default quoteSlice.reducer;