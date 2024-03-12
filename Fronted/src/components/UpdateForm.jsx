import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import toast from 'react-hot-toast'
import { IoClose } from "react-icons/io5";


export function Form() {

    let {isEdit,setIsEdit,updateUser,setId,id,updateUserData , setUpdateUserData} = useContext(AppContext)



  function changeHandler(e){
    setUpdateUserData((prev)=>( {...prev,
      [e.target.name] : e.target.value
      }))}
  
  function clickHandle(e){
    e.preventDefault()
    setIsEdit(!isEdit)
    updateUser(id,updateUserData)
    toast.success('Successfully updated User!')
  }
  return (

    <div className='main-one'>
           
 <section class="container container-two">
    <button className='cancel-btn' onClick={()=>{
        setIsEdit(!isEdit)
    }}><IoClose /></button>
        <header>Update User</header>
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

            <button id="btn-submit" onClick={clickHandle}>Edit</button>
        </form>
    </section>
    </div>

  )
}
