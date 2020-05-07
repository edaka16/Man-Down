import React from 'react';
import {Form, Col,Row } from 'react-bootstrap';
import driver from "../Images/personal-data.png";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import CameraAltIcon from '@material-ui/icons/CameraAlt';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      margin:'auto',
      justifyContent:'center',
      marginLeft:'10px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '70%',
    },
    absolute: {
      position: 'absolute',
      right: theme.spacing(3),
      marginTop: theme.spacing(-5),
      backgroundColor: 'rgb(243, 123, 32)',
      color: 'white',
    },
  }));

function PersonalData() {
 const classes = useStyles();

  return (
      <div className="personal-data" >
          <img className="driver" src={driver} alt="driver"/>
          <Tooltip title="Photo" aria-label="photo">
              <Fab className={classes.absolute}>
          <CameraAltIcon />
        </Fab>
      </Tooltip>
          <Form className="form">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                 <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSurname">
                 <Form.Control type="text" placeholder="Surname" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
        <div className={classes.container} noValidate>
           <p style={{color:'black', borderBottom:'1px solid rgb(149,149,149)', width:'50%', marginBottom:'0',marginRight: '-7px'}}>Date of Birth</p>
           <TextField
             id="date"
             type="date"
             defaultValue="DD-MMM-YYYY"
             className={classes.textField}
             InputLabelProps={{
             shrink: true,
             }}
             />
          </div>
          </Form.Group>

            <Form.Group controlId="formGridAddress">
                 <Form.Control placeholder="Address" />
            </Form.Group>

            <Form.Group controlId="formGridSuburb">
                 <Form.Control placeholder="Suburb" />
            </Form.Group>

            <Row>
              <Col xs={4} >
                 <Form.Control type="text" placeholder="Postcode" />
              </Col>

              <Col xs={8}>
                 <Form.Control type="text" placeholder="Country" />
              </Col>
            </Row>

     </Form>
    
    </div>
  );
}


export default PersonalData;