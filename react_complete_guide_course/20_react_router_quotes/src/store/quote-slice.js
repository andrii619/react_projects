import { createSlice } from "@reduxjs/toolkit";



const INITIAL = {quotes: {q1: {author: "Andrii", text: "schmee"}, q2: {author: "Andrii", text: "fuck"} }, quoteNum: 2  };

// {quotes: {q1: {}, q2: {}, ...}   } index by id
// quote: {text: "schme", author: "Andrii"}


const quoteSlice = createSlice({name:"quote-slice",
    initialState: INITIAL,
    reducers:{
        addQuote(state, action)
        {
            const newQuote = {author: action.payload.author, text: action.payload.text};
            const newQuoteId = action.payload.id;
            if(state.quotes[newQuoteId])
            {
                return;
            }
            // add new quote to list
            state.quotes[newQuoteId] = newQuote;
            state.quoteNum++;
        },
        removeQuote(state, action)
        {
            if(state.quotes[action.payload.id])
            {
                delete state.quotes[action.payload.id];
                state.quoteNum--;
            }
        },
        setQuotes(state, action)
        {
            state = action.payload;
        },
        clearQuotes(state)
        {
            state.quotes = {};
            state.quoteNum = 0;
        }
    }
});


export const quoteActions = quoteSlice.actions;

export default quoteSlice.reducer;