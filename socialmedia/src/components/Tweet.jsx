import React from 'react'
import Avatar from 'react-avatar'
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
const Tweet = () => {
  return (
    <div>
      <div className='border border-b-2 border-gray-300' >
        <div className='ml-4 pt-2' >
          <div className=' flex '>
            <Avatar src='data:image/png;base64,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' size="40" round={true} />
            <div>
              <div className='flex items-center ml-2'>
                <h1 className='font-bold'>Aniket</h1>
                <p className='text-gray-500 text-sm ml-2'>@aniketmankar</p>
              </div>
              <div ><p>hello coders i am your god</p></div>
            </div>
          </div>

          <div className='m-5 flex justify-between'>
            <div className='pl-2 py-1 flex items-center hover:bg-pink-300 cursor-pointer rounded-full'><CiHeart size='24px' />
              <p>0</p></div>
            <div className='pl-2 flex items-center hover:bg-green-200 cursor-pointer rounded-full'><FaRegComment size='24px' />
              <p>0</p></div>
            <div className='pl-2 flex items-center hover:bg-green-200 cursor-pointer rounded-full'><CiBookmark size='24px' />
              <p>0</p></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Tweet