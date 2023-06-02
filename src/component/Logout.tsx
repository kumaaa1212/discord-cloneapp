import React from 'react'
import { auth } from '../../firebase'

const Logout = () => {
  const handleLogout = () => {
 auth.signOut().catch((error) => alert(error.message))
  }
  return (
    <div>
      <button onClick={handleLogout} className='text-white mt-3'>Logout</button>
    </div>
  )
}

export default Logout