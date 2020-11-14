import React from 'react';

import {
  IoMdArrowRoundBack,
  IoMdInformationCircleOutline,
} from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/compenents/header.css';

interface HeaderInterface {
  children?: string;
}

function Header({ children }: HeaderInterface) {
  const history = useHistory();

  return (
    <header className="header">
      <IoMdArrowRoundBack size={28} onClick={() => history.goBack()} />
      <h2 className="title2">{children}</h2>
      {children ? (
        <Link to="/guide">
          <IoMdInformationCircleOutline size={28} />
        </Link>
      ) : (
        <div style={{ visibility: 'hidden' }}>&nbps;</div>
      )}
    </header>
  );
}

export default Header;
