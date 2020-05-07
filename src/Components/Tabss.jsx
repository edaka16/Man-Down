import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EmergencyContact from './EmergencyContact';
import PersonalData from './PersonalData';
import MedicalInfo from './MedicalInfo';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography  
            component="div"
             role="tabpanel"
             hidden={value !== index}
             id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
const useStyles = makeStyles((theme) => ({
    tab: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  tabs: {
    backgroundColor: 'transparent',
  }
}));

export default function Tabss() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.tab}>
        <div className={classes.tabs}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="scrollable auto tabs example">
          <Tab label="EMERGENCY CONTACT" {...a11yProps(0)}/>
          <Tab label="PERSONAL DATA" {...a11yProps(1)} />
          <Tab label="MEDICAL INFO" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EmergencyContact />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalData />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MedicalInfo />
      </TabPanel>
      </div>
    </div>
  );
}