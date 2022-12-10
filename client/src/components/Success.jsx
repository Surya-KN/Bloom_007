import React, { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
export default function Success(props){
    const [count,setCount] = useState(5)
    const navigate = useNavigate()
    const timer = ()=>{
        setInterval(()=>{
            setCount(count-1)
        },1000)
    }
    useEffect(()=>{
        timer()
    })
    useEffect(()=>{
       
        if(count<=0){
            navigate('/')
            clearInterval(timer)
        }

    },[count])
    
    return (
        <Box sx={{display:'flex',flexDirection:'column',placeContent:'center'}}>
            <Typography >Successfully Registered </Typography>
            <Typography>Redirecting in {count}</Typography>
            
        </Box>
    )
}