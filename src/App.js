import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Components/Login';
import Activated from './Components/Activated';
import MyProfile from './Components/MyProfile';
import PersonalData from './Components/PersonalData';
import CrashDetectionAlarm from './Components/CrashDetectionAlarm';

class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
                <Route exact path="/activated">
                    <Activated />
                  </Route>
              <Route exact path='/'>
                <Login />
              </Route>
              <Route exact path='/myProfile'>
                <MyProfile />
              </Route>
              <Route exact path='/crashDetection'>
                <CrashDetectionAlarm />
              </Route>
            </Switch>   
        </div>
    </Router>
   );
  } 
}

export default App;
