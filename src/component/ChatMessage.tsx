import { Timestamp } from 'firebase/firestore';
import React from 'react'
import { UserState } from '../features/userSlice';
interface Message{
  timestamp: Timestamp,
  mess: string,
  user: any,
}
const ChatMessage = (props:Message) => {
  console.log(props);
  const {mess,timestamp,user} =props;
  return (
    <div className='text-white'>
      <div className=' p-3 w-1/4'>
        <div className='flex'>
          <p className='bg-white rounded-full w-7 h-7'>{user.user.displayName}</p>
          <p className='ml-2 text-2xl'></p>
          <p className='ml-3 text-xl'>{new Date(timestamp.toDate()).toLocaleString()}</p>
        </div>
          <p className='ml-10'>{mess}</p>
      </div>
    </div>
  )
}
export default ChatMessage;