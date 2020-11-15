import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../assets/css/compenents/medalTabs.css';

import ImgBrindeSilver from '../assets/images/brindeSilver.png';
import ImgBrindeGold from '../assets/images/brindeGold.png';
import ImgBrindeDiamond from '../assets/images/brindeDiamond.png';

import TabPanel from './TabPanel';
import BrindeSorteio from './BrindeSorteio';
import Brinde from './Brinde';
import { Link } from 'react-router-dom';

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
          img={ImgBrindeSilver}
          alt="Imagem do brindo do sorteio"
          brindeName="Gelo colorido"
          winner="Luana N. dos Santos"
        />
        <h2 className="title3">Troque lumens:</h2>
        <Link to="/acce/Prêmio surpresa">
          <Brinde name="Prêmio surpresa" points="1000" />
        </Link>
        <Link to="/acce/Acessórios notebook">
          <Brinde name="Acessórios notebook" points="50" />
        </Link>
        <Link to="/acce/Acessórios geladeira">
          <Brinde name="Acessórios geladeira" points="30" />
        </Link>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BrindeSorteio
          img={ImgBrindeGold}
          alt="Imagem do brindo do sorteio"
          brindeName="Desodorizador para geladeira"
          winner="Luís José Martins"
        />
        <h2 className="title3">Troque lumens:</h2>
        <Link to="/acce/Prêmio surpresa">
          <Brinde name="Prêmio surpresa" points="1000" />
        </Link>
        <Link to="/acce/Acessórios notebook">
          <Brinde name="Acessórios notebook" points="220" />
        </Link>
        <Link to="/acce/Acessórios geladeira">
          <Brinde name="Acessórios geladeira" points="210" />
        </Link>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BrindeSorteio
          img={ImgBrindeDiamond}
          alt="Imagem do brindo do sorteio"
          brindeName="Imã para geladeira de Guardiões da Galáxias"
          winner="Priscila Ramos de Melo"
        />

        <h2 className="title3">Troque lumens:</h2>
        <Link to="/acce/Prêmio surpresa">
          <Brinde name="Prêmio surpresa" points="1000" />
        </Link>
        <Link to="/acce/Acessórios notebook">
          <Brinde name="Acessórios notebook" points="600" />
        </Link>
        <Link to="/acce/Acessórios geladeira">
          <Brinde name="Acessórios geladeira" points="510" />
        </Link>
      </TabPanel>
    </div>
  );
}

export default MedalTabs;
