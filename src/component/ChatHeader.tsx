import React from 'react'
import { useAppSelector } from '../hooks'
interface Props {
  channelName:string;
}
const ChatHeader = (props:Props) => {
  const {channelName} = props;
  const user = useAppSelector((state) =>state.user.user);
  return (
    <div>
    <div className='text-white text-3xl flex justify-between'>
      <h1>#{channelName}</h1>
      <input type="text" className='mr-8 bg-inputbg border-1 border-black' />
    </div>
    <div>
      <h1 className='text-white text-end mr-5 mt-5'>{user?.displayName}</h1>
    </div>
    </div>
  )
}

export default ChatHeader