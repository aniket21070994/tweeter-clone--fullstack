import React from 'react'
import { CreatePost } from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'
import useTweetGeter from '../hooks/useTweetGeter'

function Feed() {
  const {user}=useSelector(store=>store.user)
  useTweetGeter(user?._id)
  return (
    <div className='w-[50%] border '>
      <CreatePost />
      <Tweet />
      

    </div>
  )
}

export default Feed