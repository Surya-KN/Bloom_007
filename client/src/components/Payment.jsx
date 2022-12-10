import { Box ,Typography,TextField, Button} from "@mui/material"
import React from "react"
import { useState } from "react"
import { useParams,useLocation, Navigate, useNavigate } from "react-router-dom"
export default function(props){
    const eventNames = ["Dev Fest","Women in ML Symposium 2022","Flutter Forward","Azure Adventure Day","Microsoft Power Platform Training","Microsoft Virtual Briefing"]
    const {i} = useParams()
    const [transId,setTransId] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleTansChange = (e)=>{
        setTransId(e.target.value)
    }

    const handleSubmit = (e)=>{
        console.log("HI")
        const data = {
            eventName:location.state.eventName,
            participant:{
                name:location.state.name,
                email:location.state.email,
                transactionID:transId
            }
        }
        console.log(data)
        console.log(JSON.stringify(data))
        fetch('http://localhost:3000/addParticipant',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        })
        navigate('/success')
    }
    return (
        <Box sx={{display:'flex' ,flexDirection:'column',marginTop:5,justifyContent:'center',placeContent:'center',placeItems:'center'}}>
               <Typography component="h1" variant="h5">
              {eventNames[i]}
            </Typography>
            <img style={{width:"400px",height:"400px"}} src="../public/qr.jpg"/>

          
            <Typography sx={{textAlign:'center'}} component="h1" variant="h5">
              Enter your transaction ID
            </Typography>
            <Box sx={{display:'flex',flexDirection:'column'}}>
            <TextField name="transactionID" onChange={handleTansChange} sx={{width:"20rem",marginTop:2,marginBottom:2}} id="outlined-basic" label="Transaction ID" variant="outlined" />
            <br></br>
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
            </Box>

        </Box>
    )
}