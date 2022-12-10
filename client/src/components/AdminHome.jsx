import React, { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import data from "../../data/data.json"
import EventInfo from "./EventInfo"
import { useRef,useState } from "react";

export default function(){
  const [total,setTotal] = useState(0)
  useEffect(()=>{
    fetch('http://localhost:3000/total')
    .then((data)=>(data.json()))
    .then((data)=>(setTotal(data.data)))
  })
    return (
        <div>
        <AppBar position="static" sx={{ backgroundColor:'#0F0e17'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
 
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                backgroundColor:'#0F0e17'
              }}
            >
              BLOOM
            </Typography>

             <Typography sx={{textAlign:'center', width:"85%"}} variant="h5" component="h4">
              ADMIN
             </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Box padding={3} sx={{      backgroundColor:'#0F0e17',color:'#ffffe'}}>
      <Typography variant="h3" sx={{color:'#fffffe'  ,fontFamily: 'monospace'}} component="h3" >
         No of Registrations: {total}
    </Typography>
    <Typography  sx={{color:'#fffffe',fontFamily: 'monospace'}}  variant="h3" component="h3" >
         Revenue:  &#8377; {total*50} 
    </Typography>
    </Box>
    <Box sx={{backgroundColor:'#0F0e17',display:'flex',justifyContent:'center'
  }}>
            <Box
      sx={{
        width:"100%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        gap:5
      }}
    >
      
      {data.map((d,i)=>{
        return(
         
         <EventInfo imgUrl={d.imgUrl} key={i} id={i} img1={d.img1} img2={d.img2} speak1={d.speak1} speak2={d.speak2}  body={d.body} name={d.name} schedule={d.schedule} content={d.content} upcoming={d.upcoming}/>

        )
      })}
    
    </Box>
    </Box>
    
      
      </div>
    )
}