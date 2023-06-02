import React from 'react'
import Logout from './Logout'
import { DocumentData } from 'firebase/firestore';
import { useAppDispatch } from '../hooks';
import { setchannel } from '../features/channelSLice';
type Props = {
  id:string;
  channel:DocumentData
}
const SideBarchannel = (props:Props) => {
  const {id,channel} = props;
  const dispath = useAppDispatch();
  return (
    <div className='' onClick={() =>dispath(setchannel({channel:id,
      channNmae:channel.channelName}))}>
      <p className='text-white mt-3'>#{channel.channelName}</p>
    </div>
  )
}
export default SideBarchannel



