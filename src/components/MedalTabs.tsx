import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../assets/css/compenents/medalTabs.css';

import TabPanel from './TabPanel';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MedalTabs() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="contentTabs">
      <AppBar className="appBar" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className="barTabs"
        >
          <Tab label="Prata" {...a11yProps(0)} />
          <Tab label="Ouro" {...a11yProps(1)} />
          <Tab label="Diamante" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        Items Prata
      </TabPanel>
      <TabPanel value={value} index={1}>
        Items Ouro
      </TabPanel>
      <TabPanel value={value} index={2}>
        Items Diamantes
      </TabPanel>
    </div>
  );
}

export default MedalTabs;
