import axios from 'axios'
import React, { useState } from 'react'

function SignIn() {
    const [userData , setUserData] = useState({'username':'' , 'password':''})

    const handleStrChange = (e) =>{
        setUserData({...userData , [e.target.name] : e.target.value} )
    }
    const checkLogin = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/users/signin', {
            username: userData.username,
            password: userData.password
          });
          console.log( response );
    
        } catch (error) {
          console.error( error);
        }
      }
  return (
    <>
        <h3>SIGN IN COMPONENT</h3>
        <br></br>
        <input type='text' name = 'username' placeholder='Username' onChange={handleStrChange}></input>
        <br></br>
        <input type='text' name = 'password' placeholder='password' onChange={handleStrChange}></input> 
        <br></br>
        <button onClick={()=>{checkLogin()}}>SignIn</button>
    </>
  )
}

export default SignIn

// {
//     "username" : "05-yuvraj-singh",
//     "password" : "12312345"
// }