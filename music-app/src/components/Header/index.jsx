import React from 'react';
import { logo } from '../../assets';
import SearchInput from '../SearchInput';
import './style.scss'

const Header = () => {
  return (
    <div className="header m-20 flex justify-sb">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search">
        <SearchInput />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Header;
