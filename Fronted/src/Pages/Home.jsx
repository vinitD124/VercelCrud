
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { useContext, useEffect } from 'react'
import {toast}from 'react-hot-toast'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {Form} from "../components/UpdateForm"
import { useState } from 'react';

export default function Home() {
  


  let {users,getAllUser,deleteUser, updateUser,isEdit,setIsEdit,id,setId,updateUserData} = useContext(AppContext)

  

 function deleteUserFromDb(id){
  deleteUser(id)
  toast.success('Successfully delete User!')
 }
 
 function updateUserFromDb(id){
   setIsEdit(!isEdit)
 }

  useEffect(()=>{
    getAllUser()
  },[getAllUser])




  return (

<>



    <>

    {
      isEdit ? (<Form/>) : ("")
    }
    </>




    <div className='home'>
         <div class="container2">
       <Link to="/form"><button className='btn-add'>Add User</button></Link>
          <table>
              <thead>
                  <tr>
                      <th>name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Action</th>
                  </tr>

                {
                  users.data?.map((data)=>(
                     
                    <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td className='td'><button className='deleteUser' onClick={()=>{
                      deleteUserFromDb(data._id)
                    }}><MdDelete />
                    </button>
                    
                    <button className='edit' onClick={()=>{
                      setId(data._id)
                      updateUserFromDb()
                    }}><FaEdit /></button>
                      
                    </td>
                   
                  </tr>
                  ))
                }
                
              </thead>
              <tbody id="usertables">
                
              
              </tbody>
          </table>
          </div>
     
    </div>
                  </>
  )
}
