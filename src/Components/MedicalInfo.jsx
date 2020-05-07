import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '100%',
        },
      },

    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    
  }));

function MedicalInfo(props) {
    const classes = useStyles();
    const [blood, setBlood] = React.useState('');

  
    const handleChange = (event) => {
      setBlood(event.target.value);
    };

  return (
      <div >
        
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Blood Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={blood}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>Please select</em>
          </MenuItem>
          <MenuItem value={1}>A+</MenuItem>
          <MenuItem value={2}>A-</MenuItem>
          <MenuItem value={3}>B+</MenuItem>
          <MenuItem value={4}>B-</MenuItem>
          <MenuItem value={5}>0+</MenuItem>
          <MenuItem value={6}>0-</MenuItem>
          <MenuItem value={7}>AB+</MenuItem>
          <MenuItem value={8}>AB-</MenuItem>
        </Select>
      </FormControl>
     
     <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-read-only-input"
          label="Allergies"
          defaultValue="Lorem ipsum"
          InputProps={{
            readOnly: true,
          }}
        />
        </div>
        </form>

        <div className="text">
       
       <Typography variant="caption" gutterBottom>
        Other
      </Typography>
      <Typography variant="body2" gutterBottom>
       Lorem ipsum dolor sit amet, consetetur 
       sadipscing elitr, sed diam nonumy eirmod 
       tempor invidunt ut labore et dolore magna 
       aliquyam erat, sed diam voluptua.
      </Typography>
    

      <Typography variant="h6" gutterBottom>
             Family Doctor
      </Typography>
      </div>
        
     <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Name" />
          <TextField id="standard-basic" label="Address" />
    </form>

    <Button className="save-changes">Save Changes</Button>
    </div>
  );
}


export default MedicalInfo;

