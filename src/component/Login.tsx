import React from 'react'
import { auth, provider } from '../../firebase'
import { signInWithRedirect } from 'firebase/auth'

const Login = () => {
  const signIn = () => {
    signInWithRedirect(auth, provider).catch((error) => alert(error.message))
  }
  return (
    <div className='bg-green-500'>
      <h1>
        ここでログインしてください
      </h1>
      <button onClick={signIn}>Login</button>
    </div>
  )
}
export default Login