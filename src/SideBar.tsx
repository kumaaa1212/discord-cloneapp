import React, { useEffect, useState } from "react";
import SideBarchannel from "./component/SideBarchannel";
import {
  DocumentData,
  addDoc,
  collection,
} from "firebase/firestore";
import AddIcon from '@mui/icons-material/Add';
import Logout from "./component/Logout";
import usecollection from "./hooks/usecollection";
import { db } from "../firebase";
export interface ChannelProps {
  id: string;
  channel: DocumentData;
}
const SideBar = () => {
  const { document:channels } = usecollection('channel');
  const handleAdd = async () =>{
    let chanName = prompt("チャンネル名を入力してください");
    if(chanName){
      await addDoc(collection(db, "channel"), {
        channelName: chanName,
    })}
  }
  return (
    <div className="w-1/5 bg-black min-h-screen flex justify-between">
      <div className="w-1/3">
        <h1 className="bg-white rounded-full w-10 h-10 mt-5"></h1>
        <h1 className="bg-white rounded-full w-10 h-10 mt-5"></h1>
      </div>
      <div className=" bg-sibebar w-2/3 text-center pt-6">
        <h1 className="text-3xl text-white">Discord</h1>
        <Logout/>
        <div>
        <h2 className="text-white">チャンネル</h2>
        <div onClick={() =>handleAdd()}>
        <AddIcon />
        </div>
        </div>
        <div className="mt-6">
        {channels.map((channel) => (
          <SideBarchannel channel={channel.channel} id={channel.id} key={channel.id} />
          ))}
          </div>
      </div>
    </div>
  );
};

export default SideBar;



