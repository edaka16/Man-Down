import React from 'react';
import PropTypes from 'prop-types';

import {useHistory} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MotorBike from "../Images/motorbike.png";
import Tabss from './Tabss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar:{
    minHeight: '0',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    margin: '34px 0',
    padding: theme.spacing(3),
  },
  paper: {
    textAlign: 'center',
  },
  paper2:{
    padding: theme.spacing(2),
    margin: '0 auto 15px',
    maxWidth: 500,
  },
  manual: {
    paddingTop: '10px',
    color: 'rgb(243, 123, 32)',
    fontFamily:'Roboto',
    fontSize: '14px',
    boxShadow:'none',
    background: 'transparent',
  },
  alarm:{
    background:'rgb(243, 123, 32)',
    padding: '10px',
    color:'white',
  },
  active: {
     color: 'rgb(143, 167, 45)',
     fontSize: '25px',
     fontFamily: 'Roboto',
     fontWeight: 'bold',
     lineHeight: '1.2',
     borderBottom: '1px solid black',
  },
}));

function MyProfile(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let history = useHistory();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
     
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          My Profile
        </ListSubheader>
      }>


        
        <Divider />
        <ListItem button onClick={(e)=>{ history.push("/")}}>
            <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button onClick={(e)=>{ history.push("/myProfile")}}>  
            <ListItemText primary={'My Profile'}/>
        </ListItem>  
        <ListItem button onClick={(e)=>{ history.push("/activated")}}>  
            <ListItemText primary={'Crash Detection'}/>
        </ListItem> 
        <ListItem button >   
            <ListItemText primary={'Log Out'}/>
        </ListItem> 
        <ListItem button >   
            <ListItemText primary={'About Us'}/>
        </ListItem>
        <ListItem button >    
            <ListItemText primary={'Help'}/>
        </ListItem>
      
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
     
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{background:"rgb(243,123,32)"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Profile
          </Typography>
          <img className="motorbike" src={MotorBike} alt="motorbike"/>
        </Toolbar>
        <Tabss />
      </AppBar>
     
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        
      </nav>
     
    </div>
  );
}

export default MyProfile;