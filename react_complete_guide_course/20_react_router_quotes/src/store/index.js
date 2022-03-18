
import { configureStore} from "@reduxjs/toolkit";

import quoteReducer from "./quote-slice";



const store = configureStore({reducer: {quoteReducer: quoteReducer}  });



export default store;