import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../assets/css/compenents/medalTabs.css';

import ImgSilver from '../assets/images/brindeSilver.png';
import ImgGold from '../assets/images/brindeGold.png';
import ImgDiamond from '../assets/images/brindeDiamond.png';

import TabPanel from './TabPanel';
import BrindeSorteio from './BrindeSorteio';
import Brinde from './Brinde';

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
        <BrindeSorteio
          img={ImgSilver}
          alt="Imagem do brindo do sorteio"
          brindeName="Gelo colorido"
        />
        <h2 className="title3">Troque lumens:</h2>
        <Brinde brindeName="Adesivo" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BrindeSorteio
          img={ImgGold}
          alt="Imagem do brindo do sorteio"
          brindeName="Desodorizador para geladeira"
        />
        <h2 className="title3">Troque lumens:</h2>
        <Brinde brindeName="Adesivo" />
        <Brinde brindeName="Acessório para geladeira" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BrindeSorteio
          img={ImgDiamond}
          alt="Imagem do brindo do sorteio"
          brindeName="Imã para geladeira de Guardiões da Galáxias"
        />

        <h2 className="title3">Troque lumens:</h2>
        <Brinde brindeName="Prêmio surpresa" />
        <Brinde brindeName="Acessório para geladeira" />
      </TabPanel>
    </div>
  );
}

export default MedalTabs;
