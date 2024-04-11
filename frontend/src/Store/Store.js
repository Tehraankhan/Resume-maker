import { configureStore } from "@reduxjs/toolkit";

import userDataSlice from "./userDataSlice";

const Store = configureStore({

    reducer: {
       userDataSlicekey:userDataSlice
    }
})
export default Store