import axios from "axios"
import { TWEET_API_END_POINT, USER_API_END_POINT } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getTweets } from "../redux/tweetSlice"

const useTweetGeter= (id,flag)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        const tweetGeter=async()=>{
            try{

                const res=await axios.get(`${TWEET_API_END_POINT}/tweets/${id}`,{withCredentials:true})
                console.log(res.data.user)
    
                //setting data to redux sotorage
                dispatch(getTweets(res?.data?.tweets))
                
           }
           catch(err){
               console.log(err)
           }
        }
        tweetGeter()
       
    },[id],[flag])
    
}
export default useTweetGeter;