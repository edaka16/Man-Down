import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },
  paper2:{
    padding: theme.spacing(2),
    margin: '0 auto 15px',
    maxWidth: 500,
  },
  absolute: {
    position: 'absolute',
    bottom:'-80px',
    right: theme.spacing(3),
    backgroundColor: 'rgb(243, 123, 32)',
    color: 'white',
  },
  
}));

function EmergencyContact() {
  const classes = useStyles();


  return (
    <div className="emergency-contact">

    <div className={classes.root}>
        <Paper className={classes.paper2}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
                    <Typography className="subtitle" >
                      Monica Fitzgerald
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      +61 448 123 456
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      monica.fitzgerald@gmail.com
                    </Typography>
                </Grid>
              <Grid item style={{padding:'0'}}>
              <Button size="small" style={{color: 'rgb(243, 123, 32)'}}>
                WRITE MESSAGE
                </Button>
                <Button size="small" style={{color: 'rgb(243, 123, 32)'}}>
                CALL
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper2}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
                    <Typography className="subtitle" >
                      John Applessed
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      +61 448 987 654
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      john.appleseed@gmail.com
                    </Typography>
                </Grid>
              <Grid item style={{padding:'0'}}>
              <Button size="small" style={{color: 'rgb(243, 123, 32)'}}>
                WRITE MESSAGE
                </Button>
                <Button size="small" style={{color: 'rgb(243, 123, 32)'}}>
                CALL
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper2}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
                    <Typography className="subtitle" >
                      Gerald Smith
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      +61 448 135 579
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      gerald.smith@gmail.com
                    </Typography>
                </Grid>
              <Grid item style={{padding:'0'}}>
              <Button size="small" style={{color: 'rgb(243, 123, 32)'}}>
                WRITE MESSAGE
                </Button>
                <Button size="small" style={{color: 'rgb(243, 123, 32)'}}>
                CALL
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
      </div>
    </div>
  );
}

export default EmergencyContact;