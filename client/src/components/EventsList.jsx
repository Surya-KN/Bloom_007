import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import EventComponent from "./EventComponent"
import data from "../../data/data.json"
import { Container } from '@mui/system';
export default function Eventlist() {
 
  return (
    <>
   
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
         
         <EventComponent imgUrl={d.imgUrl} i={i} img1={d.img1} img2={d.img2} speak1={d.speak1} speak2={d.speak2}  body={d.body} name={d.name} schedule={d.schedule} content={d.content} upcoming={d.upcoming}/>

        )
      })}
    
    </Box>
    </Box>
    </>

  );
}