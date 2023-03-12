import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignup=()=>{
    const [isLoading,setIsloading]=useState(false)
    const [error,setError]=useState(null)

    const  {dispatch}=useAuthContext()

    const signup=async(name,email,password)=>{
         
            setIsloading(true)
            setError(null)

        const res=await fetch('http://localhost:4000/api/user/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,password})
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
        signup,
        isLoading,
        error
    }
}