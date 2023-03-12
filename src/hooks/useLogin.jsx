import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin=()=>{
    const [isLoading,setIsloading]=useState(false)
    const [error,setError]=useState(null)

    const  {dispatch}=useAuthContext()

    const login=async(email,password)=>{
         
            setIsloading(true)
            setError(null)

        const res=await fetch('http://localhost:4000/api/user/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        });
        const data= await res.json();
        if(!res.ok){
            setIsloading(false)
            setError(data)
        }
        if(res.ok){
            setIsloading(false)
            //update auth context
            dispatch({type:"LOGIN",payload:data})

            //update storage 
            localStorage.setItem('user',JSON.stringify(data))
        }
    }

    return {
        login,
        isLoading,
        error
    }
}