import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { useState } from 'react'

export default function Form() {

    
  let navigate = useNavigate()
  let {getAllUser,createUser} = useContext(AppContext)


  let [user , setUser] = useState({name:"",email:"",phone:""})

  function changeHandler(e){
    setUser((prev)=>( {...prev,
      [e.target.name] : e.target.value
      }))
  }



  function clickHandle(e){
    e.preventDefault()
    createUser(user)
    navigate("/")
  }
  return (
   


 <section class="container">
        <header>Register User</header>
        <form action="#" class="form">
            <div class="input-box">
                <label>Full Name</label>
                <input onChange={changeHandler} id="name" name='name' type="text" placeholder="Enter full name" required />
            </div>
            <div class="input-box">
                <label>Email Address</label>
                <input onChange={changeHandler}  id="email" type="text" name='email' placeholder="Enter email address" required />
            </div>
            <div class="column">
                <div class="input-box">
                    <label>Phone Number</label>
                    <input onChange={changeHandler} id="number" type="number" name='phone' placeholder="Enter phone number" required />
                </div>

            </div>

            <button id="btn-submit" onClick={clickHandle}>Submit</button>
        </form>
    </section>

  )
}
