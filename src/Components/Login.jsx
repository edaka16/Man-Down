import React from 'react';
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Row,Form,Col,Button } from 'react-bootstrap';
import Logo from "../Images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));


const Login = ()=> {
  let history = useHistory();
  function handleSubmit(e){
    history.push("/activated")
  }
  const classes = useStyles();

  return (
    <div className="background">

        <div className="container">
        <img className="logo" src={Logo} alt="logo"/>

         <Row>
           <Col className="login-with">
              Login with 
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
           </Col>
         </Row>

          <Form className={classes.root} noValidate autoComplete="off">
        
              <TextField 
              id="standard-primary" 
              label="Username" 
              color="primary" 
            />
              <TextField 
                  id="standard-secondary" 
                  label="Password" 
                  color="secondary" 
                />
          </Form>
          
          <div className="forget-login">
            <Row>
              <Col xs={6}>
              <a src="#" className="forget-passw">Forget Password? </a>
              </Col>
              <Col xs={2}>
              </Col>
              <Col >
              <Button className="login">LOGIN</Button>
              </Col>
              
              </Row>
              </div>
          <Row>
            <Col>
              <p style={{color:"white", margin:"auto",fontSize: "16px", display:"flex", justifyContent:"center", alignItems:"center"}}>New to URS? Sign up here</p>
            </Col>
          </Row>


         <Button className="start" type="submit" onClick={handleSubmit} 
           style={{
            background:"rgb(243, 123, 32)",
            padding: "7px 15px", 
            }} >
            START RIDE
          </Button>
          

        </div>
    </div>
  );
}
export default Login;