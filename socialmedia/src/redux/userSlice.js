import {createSlice} from "@reduxjs/toolkit"

const userSlice= createSlice({
    //name of slice
    name:"user",
    //initial state
    initialState:{
        user:null,
        profile:null,
        otherUser:null
        
    },
    reducers:{
        //multiple actions
        getUser:(state,action)=>{
            state.user=action.payload
        },
        getUserProfile:(state,action)=>{
            state.profile=action.payload
        },
        getOtherUser:(state,action)=>{
            state.otherUser=action.payload
        }
      
    }
})
//exporting actions and reducer to store
export const {getUser,getOtherUser,getUserProfile} =userSlice.actions
export default userSlice.reducer