import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { CssBaseline, Paper } from '@mui/material';
import './appbar.css'
import Eventlist from './EventsList';
const pages = ['Products', 'Pricing', 'Blog','as','asdadsdas','asdasda','asdasdas'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function CusAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{backgroundColor:'#0F0e17'}}>
    <AppBar sx={{backgroundColor:'#0F0e17'}} position="static">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontSize:"40px",
              display: { xs: 'none', md: 'flex',marginLeft:"45%" },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BLOOM
          </Typography>
          
        </Toolbar>
      </Container>
    </AppBar>
  
        <Eventlist/>
    </div>
  );
}
export default CusAppBar;
