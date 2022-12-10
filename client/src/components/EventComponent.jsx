import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Avatar } from '@mui/material';
import { Button, CardActionArea, CardActions, CssBaseline,Divider ,Stack} from '@mui/material';
import { Container } from '@mui/system';
import { Navigate, useNavigate } from 'react-router-dom';
import Registration from './Registration';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",

  border: '2px solid #000',
  backgroundColor:'#faeee7',
  boxShadow: 24,
  p: 4,
};

export default function MultiActionAreaCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const handleRedirect = ()=>{
  navigate(`/register/${props.i}`,)
  }
  return (
    <div>
    <Card onClick={handleOpen} sx={{ maxWidth:  "400px",marginTop:2,marginBottom:2}}>
   
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          
          image={props.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          {
           props.upcoming&&(<div>
            <Typography  variant="span" sx={{textAlign:'left',fontSize:'17px',marginBottom:"5px"}} component="p">
               {props.upcoming&& "Upcoming"}
              </Typography>
  
              </div>)
          }
        
          <Typography gutterBottom variant="h5" component="div">
           {props.name}
          </Typography>
       
          <Typography gutterBottom variant="h5" component="div">
           {props.schedule}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' sx={{backgroundColor:'#ff8906'}} onClick={handleRedirect} size="small" color="primary">
          Register
        </Button>
      </CardActions>
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
              <Typography id="transition-modal-description" sx={{ mt: 2,fontSize:'20px' }} variant="p" component="p">
              {props.body}
              </Typography>

              <CssBaseline/>
              <Typography variant="h6" component="h6">Speakers</Typography>
<Stack direction="row" sx={{marginTop:2}} spacing={2}>
  <Box>
  <Avatar sx={{height:"80px",width:"80px"}} src={props.img1} />
  <Typography>{props.speak1}</Typography>
  </Box>
<Box>
<Avatar sx={{height:"80px",width:"80px"}}  src={props.img2} />
<Typography>{props.speak2}</Typography>
</Box>


    </Stack>
    <Button onClick={handleRedirect} sx={{backgroundColor:'#ff8906',marginTop:"20px",color:'#fffffe'}}variant="contained">Register</Button>
              </Box>
            </Box>
     
        </Fade>
      </Modal>

      
    </div>
  );
}






