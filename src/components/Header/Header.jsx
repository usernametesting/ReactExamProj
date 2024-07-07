import React, { useEffect } from 'react';
import './Header.css';
import { setActiveStatus } from '../../redux/slices/filterStateReducer';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {


  const { filterComponentState } = useSelector(state => ({
    filterComponentState: state.filter.filterComponentState
  }));

  const dispatch = useDispatch();

  const filterBtnClick = () => {
    dispatch(setActiveStatus({
      filterComponentState: !filterComponentState
    }));
  }

  
  return (
    <header className="header">
      <div className="logo">CountryHub</div>
      <button onClick={filterBtnClick} style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
        <div className="menu-icon">&#9776;</div>
      </button>
    </header>
  );
};

export default Header;
