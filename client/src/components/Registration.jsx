import React from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Zoom from '@mui/material/Zoom';
import Paper from "@mui/material/Paper"
import { Fade,Modal, } from "@mui/material";
import "./Registration.css"
import { useState } from "react";
export default function Registration(props) {
  const eventNames = ["Dev Fest","Women in ML Symposium 2022","Flutter Forward","Azure Adventure Day","Microsoft Power Platform Training","Microsoft Virtual Briefing"]
  const {i} = useParams()
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const handleNameChange = (e)=>{
    setName(e.target.value)
  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }
  console.log(i)
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  const handleClick = ()=>{
    navigate(`/payment/${i}`,{
      state:{
        eventName:eventNames[i],
        name: name,
        email:email
      }
    })
  }
    return (
  
    
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
 
            <Typography component="h1" variant="h5">
              {eventNames[i]}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
          
                <Grid item xs={12}>
                  <TextField
           
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    onChange={handleNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleEmailChange}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    
                <MenuItem value={13}>13-16</MenuItem>
                <MenuItem value={17}>17-19</MenuItem>
                <MenuItem value={20}>20-25</MenuItem>
                <MenuItem value={26}>26-40</MenuItem>
                <MenuItem value={40}>40 and above</MenuItem>
              </Select>
    </FormControl>
                </Grid>
            
                
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,backgroundColor:"#ff8906",color:"#fffffe" }}
                onClick={handleClick}
              >
                Register
              </Button>
              
            </Box>
          </Box>


  

        </Container>
    );
  }
