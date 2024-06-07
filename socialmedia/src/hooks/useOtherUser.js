import axios from "axios"
import { USER_API_END_POINT } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getOtherUser } from "../redux/userSlice"
const useOtherUser= (id)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        const otherUserGeter=async()=>{
            try{

                const res=await axios.get(`${USER_API_END_POINT}/otheeuser/${id}`,{withCredentials:true})
                console.log(res.data.user)
    
                //setting data to redux sotorage
                dispatch(getOtherUser(res?.data?.otherUsers))
           }
           catch(err){
               console.log(err)
           }
        }
        otherUserGeter()
       
    },[id])
    
}
export default useOtherUser;