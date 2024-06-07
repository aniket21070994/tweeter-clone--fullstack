import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useOtherUser from '../hooks/useOtherUser'


function Home() {

 const {user}=useSelector(store=>store.user)
  useOtherUser(user?._id)
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>

  )
}

export default Home