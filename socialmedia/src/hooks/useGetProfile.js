import axios from "axios"
import { USER_API_END_POINT } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getUserProfile } from "../redux/userSlice"
const useGetMyProfile= (id)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        const profileGeter=async()=>{
            try{

                const res=await axios.get(`${USER_API_END_POINT}/profile/${id}`,{withCredentials:true})
                console.log(res.data.user)
    
                //setting data to redux sotorage
                dispatch(getUserProfile(res?.data?.user))
           }
           catch(err){
               console.log(err)
           }
        }
        profileGeter()
       
    },[id])
    
}
export default useGetMyProfile;