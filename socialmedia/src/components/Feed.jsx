import React from 'react'
import { CreatePost } from './CreatePost'
import Tweet from './Tweet'

function Feed() {
  return (
    <div className='w-[50%] border '>
      <CreatePost/>
      <Tweet/>
      <Tweet/>
      
    </div>
  )
}

export default Feed