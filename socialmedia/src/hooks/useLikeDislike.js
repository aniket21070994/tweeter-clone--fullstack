import axios from "axios"

import { TWEET_API_END_POINT } from '../utils/constants'


export const useLikeDislike = async(twId,id) => {
    
   const res= await axios.put(`${TWEET_API_END_POINT}/like/${twId}`,{id},{withCredentials:true})

}

