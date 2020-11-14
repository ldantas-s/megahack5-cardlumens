import React from 'react';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import '../assets/css/compenents/header.css';

interface HeaderInterface {
  children: string;
}

function Header({ children }: HeaderInterface) {
  const history = useHistory();

  return (
    <header className="header">
      <IoMdArrowRoundBack size={28} onClick={() => history.goBack()} />
      <h2 className="title2">{children}</h2>
      <div style={{ visibility: 'hidden' }}>sda</div>
    </header>
  );
}

export default Header;
