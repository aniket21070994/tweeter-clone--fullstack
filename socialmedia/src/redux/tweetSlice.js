import { createSlice } from "@reduxjs/toolkit";
const tweetSclice = createSlice({
    //name of slice
    name: "tweets",
    //initial state 
    initialState: {
        tweet: null
    },
    reducers: {
        //reducer actions
        getTweets: (state, action) => {
            state.tweet = action.payload
        }
    }
})
export const {getTweets}=tweetSclice.actions
export default tweetSclice.reducer