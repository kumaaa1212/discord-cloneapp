import React, { useEffect } from "react";
import SideBar from "./SideBar";
import "././styles/App.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import Login from "./component/Login";
import { auth } from "../firebase";
import { login, logout } from "./features/userSlice";
import MainArea from "./MainArea";
export const App = () => {
  const user = useAppSelector((state) =>state.user.user);
  const dispath =useAppDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        dispath(login({
          uid:user.uid,
          photo:user.photoURL,
          email:user.email,
          displayName:user.displayName,
        }));
      }else{
        dispath(logout());
        // actionがある時は引数が必要になるactionはなんもでも入れることができる.

        // onAuthStateChangedこれはauthの状態が変化するたびにはっかするものである
      }
    })
  },[dispath])
  return (
    <div>
    { user ? ( <div className="flex">
    <SideBar />
    <MainArea />
  </div> ) : (
    <div className=""><Login/></div>
    )}
    </div>
  );
};


// auth自体がlogoutされていることと、クライアント側がlogoutされていることは別のことである。
