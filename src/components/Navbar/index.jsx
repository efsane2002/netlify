import * as React from 'react';
import { Link } from "react-router-dom";
import style from "./index.module.css"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" className={style.text}>
          <ul style={{height:"50px",display:"flex", justifyContent:"space-around", alignItems:"center"}} className={style.ul}>
        <li>
          <Link to='/' style={{textDecoration:"none", color:"white"}}>Home</Link>
        </li>
        <li>
          <Link to='/about' style={{textDecoration:"none", color:"white"}}>About</Link>
        </li>
        <li>
          <Link to='/contact' style={{textDecoration:"none", color:"white"}}>Contact</Link>
        </li>
        <li>
          <Link to='/login' style={{textDecoration:"none", color:"white"}}>Login</Link>
        </li>
        <li>
          <Link to='/register' style={{textDecoration:"none", color:"white"}}>Register</Link>
        </li>
        <li>
          <Link to='/services' style={{textDecoration:"none", color:"white"}}>Services</Link>
        </li>
    </ul>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader className={style.drawer}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon  /> : <ChevronRightIcon style={{position:"absolute", bottom:"110px", fontSize:"30px"}}/>}
          </IconButton>
        
        <List style={{width:"100%", height:"100%", marginTop:"20px"}} className={style.list}>
          
             <ul style={{height:"100%", lineHeight:"50px"}} className={style.ul1}>
             <li>
               <Link to='/' style={{textDecoration:"none"}}>Home</Link>
             </li>
             <li>
               <Link to='/about' style={{textDecoration:"none"}}>About</Link>
             </li>
             <li>
               <Link to='/contact' style={{textDecoration:"none"}}>Contact</Link>
             </li>
             <li>
               <Link to='/login' style={{textDecoration:"none"}}>Login</Link>
             </li>
             <li>
               <Link to='/register' style={{textDecoration:"none"}}>Register</Link>
             </li>
             <li>
               <Link to='/services' style={{textDecoration:"none"}}>Services</Link>
             </li>
         </ul>
          

        </List>
        <Divider />
        </DrawerHeader>
      </Drawer>
    </Box>
  );
}