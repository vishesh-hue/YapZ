import axios from 'axios'
import React, { useState } from 'react'

function SignUp() {
    const [userData , setUserData] = useState({'username':'' , 'email':'' , 'password':''})

    const handleStrChange = (e) =>{
        setUserData({...userData , [e.target.name] : e.target.value} )
    }
    const putData = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/users/signup', {
            username: userData.username,
            email: userData.email,
            password: userData.password
          });
          console.log( response );
    
        } catch (error) {
          console.error( error);
        }
      }
  return (
    <>
        <h3>SIGN UP COMPONENT</h3>
        <br></br>
        <input type='text' name = 'username' placeholder='Username' onChange={handleStrChange}></input>
        <br></br>
        <input type='text' name = 'email' placeholder='Email' onChange={handleStrChange}></input>
        <br></br>
        <input type='text' name = 'password' placeholder='password' onChange={handleStrChange}></input> 
        <br></br>
        <button onClick={()=>{putData()}}>SignUp</button>
    </>
  )
}

export default SignUp
