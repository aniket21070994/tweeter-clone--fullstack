import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io"; 
import { CiHashtag } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//geting user details from redux store 

function LeftSidebar() {
  const {user}=useSelector(store=>store.user)
  return (
    <div className='w-[20%]  '>
      <div>
          <div className='ml-4'>
              <img className='w-[24px]' src="https://w7.pngwing.com/pngs/748/680/png-transparent-twitter-x-logo.png" alt="twiter logo" srcset="" />
          </div>
           <div>
            <Link to="/">
                  <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full'>
                    <CiHome size='24px'/>
                    <div className='font-bold text-lg ml-2'>
                       <h1>Home</h1>
                    </div>
                 </div>
            </Link>
             
                 
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full'>
                 <CiHashtag size='24px'/>
                 <div className='font-bold text-lg ml-2'>
                    <h1>Explore</h1>
                  </div>
                </div>

                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full'>
               
                 <IoMdNotificationsOutline size='24px'/>

                 <div className='font-bold text-lg ml-2'>
                    <h1>Notification</h1>
                  </div>
                </div>
                
                <Link to={`/profile/${user?._id}`} >
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full'>
               
                       <CiUser size='24px'/>
                       <div className='font-bold text-lg ml-2'>

                          <h1>Profile</h1>
                        </div>
                     </div>
                  </Link>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full'>
                <CiBookmark size='24' />
                 <div className='font-bold text-lg ml-2'>
                    <h1>Bookmark</h1>
                  </div>
                </div>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full'>
                 <IoMdLogOut size='24px'/>
                 <div className='font-bold text-lg ml-2'>
                    <h1>Logout</h1>
                  </div>
                 
                </div>
                <div>
                <button className='px-4 py-2 border-none texte-md bg-[#109BF0] w-full rounded-full text-white font-bold'>Post</button>
                </div>
                 
               

            </div>
      </div>
    </div>
  )
}

export default LeftSidebar