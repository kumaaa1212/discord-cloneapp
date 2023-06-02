import React, { useEffect, useState } from 'react'
import ChatHeader from './component/ChatHeader'
import ChatMessage from './component/ChatMessage'
import { useAppSelector } from './hooks'
import { CollectionReference, DocumentData, DocumentReference, Timestamp, addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
 interface Message{
  timestamp: Timestamp,
  message: string,
  user: any[],
}
const MainArea = () => {
  const [messages, setMessages] = useState<string>('');
  const [fetchmessages,setfetchmessages ] = useState<Message[]>();
  const chat = useAppSelector((state) => state.channel);
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    let collectionRef = collection(db, 'channel', String(chat), 'message');
    onSnapshot(collectionRef, (querySnapshot) => {
      const messages = [];
      querySnapshot.docs.forEach((doc) => {
        messages.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setfetchmessages(messages);
    });
  }, [channel]);
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const collectionRef:CollectionReference<DocumentData> = collection(db, 'channel',String(chat.channel),'message');
    const docRef:DocumentReference<DocumentData> = await addDoc(collectionRef,{
      message:messages,
      timestamp:serverTimestamp(),
      user:user
    })
  }
  return (
    <div className='w-4/5 bg-primary pt-7 pl-10'>
      <ChatHeader channelName={chat.channNmae} />
      <div>
      {fetchmessages?.map((mees,index) =>(
        <ChatMessage key={index} mess={mees.message} timestamp={mees.timestamp} user={mees.user}/>
      ))}
      </div>
      <div className='w-full'>
        <form action="" onSubmit={(e:React.FormEvent<HTMLFormElement>) =>handleSubmit(e)}>
      <input type="text" className='bg-Inputbg border-1 border-black absolute bottom-2 w-3/5 h-10 mr-5 text-white' onChange={(e:React.ChangeEvent<HTMLInputElement>) =>setMessages(e.target.value)}/>
        </form>
    </div>
    </div>
  )
}

export default MainArea