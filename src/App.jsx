import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CountryCard from './components/CountryCard/CountreyCard';
import Filters from './components/Filters/Filters';
import Footer from './components/Footer/Footer';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDatas } from './redux/slices/datas';
import { useGetCountriesQuery } from './services/apis/countriesApi';

const App = () => {

  const dispatch = useDispatch();

  const filterComponentState = useSelector(state => state.filter.filterComponentState);
  const countries = useSelector(state => state.datas.countries);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const initialDatas = useGetCountriesQuery();
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    if (initialDatas.status === "fulfilled") {
      dispatch(setDatas({
        filteredCountries: initialDatas.data,
      }))
    }
  }, [initialDatas])

  useEffect(() => {

    if (countries?.length > 0)
      setVisibleCountries(countries.slice(0, displayCount));
  }, [countries, displayCount]);


  const handleMoreButton = () => {
    setDisplayCount(displayCount + 20);
    if (countries?.length < displayCount)
      alert("no more datas");
  }

  return (
    <div style={{ position: 'relative' }}>

      <div className="app-container" style={{ opacity: filterComponentState ? '0.5' : '1' }}>
        <Header />
        <div className="main-content">
          <div className="content">
            <SearchBar />
            <div className="country-list">
              {visibleCountries?.map((country, index) => (
                <Link state={country} to={'/country'} key={index}>
                  <CountryCard country={country} key={index} />
                </Link>
              ))}
            </div>
            <div style={{display:'flex',gap:'50px',alignItems:'center',justifyContent:'center'}}>
              <button onClick={handleMoreButton} className="see-more-button">See more countries</button>
              <span style={{fontSize:'20px'}}>{visibleCountries?.length}\{countries?.length}</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {filterComponentState ? <Filters /> : null}
    </div>
  );
};

export default App;
