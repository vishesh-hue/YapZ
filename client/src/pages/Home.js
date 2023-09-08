import React from 'react'
import Chatarea from '../components/chatArea/Chatarea'
import Sidebar from '../components/sideBar/Sidebar'
import Signup from '../components/auth/Signup'

export default function Home() {
  return (
    <div>
        home 
        <div>
            <Chatarea>

            </Chatarea>
        </div>
        <div>
            <Sidebar></Sidebar>
        </div>
        <div><Signup></Signup></div>
    </div>
  )
}
