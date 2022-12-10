import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CardActionArea } from "@mui/material";
import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
 backgroundColor:'#faeee7',
  boxShadow: 24,
  p: 4,
};

export default function MultiActionAreaCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data,setData] = useState([])
  function createData(name, amount, status) {
    return { name, amount, status};
  }

  
  React.useEffect(()=>{
    fetch(`http://localhost:3000/getParticipants/${props.id}`)
    .then((data)=>(data.json())).then((data)=>{setData(data.data)})
  },[])

  const rows = data.map((d)=>{
    return createData(d.name,50,"success")
  })


  return (
    <div>
    <Card onClick={handleOpen} sx={{ minWidth:"400px",marginTop:2}}>
   
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.imgUrl}
          alt="green iguana"
        />
        <CardContent >
         
        
          <Typography gutterBottom variant="h5" component="div">
           {props.name}
          </Typography>
       
          <Typography gutterBottom variant="h5" component="div">
           {props.schedule}
          </Typography>
          <Typography sx={{fontFamily:'comic-sans'}} variant="h6" color="text.primary">
            Registrations: {props.registrations}   {data.length}    
          </Typography>
          <Typography variant="h6" color="text.primary">
            Revenue: &#8377;{data.length*50  }     
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade  in={open}>
      
            <Box sx={style}>
              <Box sx={{my:2}}>
              <Typography id="transition-modal-title" variant="h2" component="h2">
                {props.name}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2,wordWrap:'break-word',width:"50%",fontSize:'20px' }} variant="p" component="p">
              Date: {props.schedule}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2,wordWrap:'break-word',width:"50%",fontSize:'20px' }} variant="p" component="p">
              Venue: New Horizion College
              </Typography>
        
              <TableContainer sx={{ marginTop:"20px"}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of the participant</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Transaction ID</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {d.name}
              </TableCell>
              <TableCell align="right">50</TableCell>
              <TableCell align="right">{d?.transactionID}</TableCell>
              <TableCell align="right">Success</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
              </Box>
            </Box>
     
        </Fade>
      </Modal>

      
    </div>
  );
}

