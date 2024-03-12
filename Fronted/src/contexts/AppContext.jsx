import { createContext, useEffect, useState } from "react";

export const AppContext  = createContext()


export function AppContextProvider({children}){

    let [users,setUsers] = useState([])

      let [isEdit,setIsEdit] = useState(false)
      let [updateUserData , setUpdateUserData] = useState({name:"",email:"",phone:""})
      let [id,setId] = useState(null)

    async function getAllUser(){

        let res = await fetch(import.meta.env.VITE_APP_BASE_URL+"/getUser",{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
          })


        let datas = await res.json()
        setUsers(datas)
    
    }

    async function updateUser(id,data){

      // console.log(id)
      // console.log(data)

      try {
        const resp = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/updateUser/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

      } catch (error) {
          console.log(error)
      }

    }


    async function deleteUser(id){
      try {

        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/deleteUser/${id}`,{
          method:'DELETE'
        })

        const data = response
        console.log(data)

      } catch (error) {
          console.log(error)
      }
    } 

    const createUser = async (data) => {

        const savedUserResponse = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/addUser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
    
      };
        


    let value = {
        users,
        getAllUser,
        createUser,
        deleteUser,
        updateUser,
        isEdit,
        setIsEdit,
        updateUserData,
        setUpdateUserData,
        id,
        setId
    }




    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}