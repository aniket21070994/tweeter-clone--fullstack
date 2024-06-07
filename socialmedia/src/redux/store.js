import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import tweetSlice from "./tweetSlice"

const store= configureStore({
  reducer:{
    //facility name : facility function 
     user:userSlice,
     tweet:tweetSlice
  }
})
export default store