import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { filterBy } from './../../enums/filterCondition';
import { useGetFilteredCountriesQuery } from '../../services/apis/countriesApi';
import { useDispatch } from 'react-redux';
import { setDatas } from '../../redux/slices/datas';

const SearchBar = () => {


  const dispatch = useDispatch();
  const [searchCondition, setSearchCondition] = useState("");
  const [selectedOption, setSelectedOption] = useState(filterBy.name);
  const filteredData = useGetFilteredCountriesQuery({ conditionType: selectedOption, condition: searchCondition })


  useEffect(() => {
    if (searchCondition == "")
      dispatch(setDatas({
        filteredCountries: filteredData.data,
      }))
  }, [searchCondition])

  const handleSearchBtn = () => {

    if (searchCondition === "")
      return;

    dispatch(setDatas({
      filteredCountries: filteredData.data,
    }))
  }

  return (
    <div className="search-bar">
      <div className="search-bar-div">
        <input type="text" placeholder="Search" onChange={(e) => setSearchCondition(e.target.value)} />
        <select className='select-box' onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="name">Name</option>
          <option value="fullText">Full Name</option>
          <option value="alpha">Code</option>
        </select>
      </div>

      <button id='search-btn' onClick={handleSearchBtn}>Search</button>
    </div>


  );
};

export default SearchBar;
