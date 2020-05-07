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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Alarm from "../Images/alarm.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:'55px',
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
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    minHeight: '0',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  crashDetection: {
    marginBottom: '5px',
    fontSize: '13px',
    fontFamily: 'Roboto',
    color: 'rgb(117, 117, 117)',
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
  paddingTop: '10px',
  color: 'rgb(243, 123, 32)',
  fontFamily:'Roboto',
  fontSize: '14px',
  boxShadow:'none',
  background: 'transparent',
  float: 'right',
  },
  active: {
     color: 'rgb(143, 167, 45)',
     fontSize: '26px',
     fontFamily: 'Roboto',
     fontWeight: 'bold',
     lineHeight: '1.2',
     borderBottom: '1px solid black',
  },
}));

function Activated(props) {
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
          Crash Detection
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
      <div className='body2'>
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
            Crash Detection
          </Typography>
          <img className="motorbike" src={MotorBike} alt="motorbike"/>
        </Toolbar>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <img src={Alarm} alt="crash-detection" />
         

         <div className="alarm-minutes">
             <p>Alarm will be activated in</p>
             <h2>01:59</h2>
         </div>

        <div className="manual-alarm">
        <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button className={classes.manual}>CANCEL ALARM</Button>
        </Grid>
        <Grid item xs={6}>
        <Button className={classes.alarm}>VIEW RIDER DETAILS</Button>
        </Grid>
      </Grid>
      </div>
      </main>
    </div>
    
    </div>
  );
}


export default Activated;