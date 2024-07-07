import React, { useEffect, useState } from 'react';
import './Filters.css';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStatus } from '../../redux/slices/filterStateReducer';
import { setDatas } from '../../redux/slices/datas';
import { setIndex } from '../../redux/slices/filterButtonState';
import selectedRegion, { setRegion } from '../../redux/slices/selectedRegion';
import { useGetCountriesQuery } from '../../services/apis/countriesApi';

const Filters = () => {

  const dispatch = useDispatch();
  const [independanceStatus, setIndependanceStatus] = useState(true);

  const { filterComponentState } = useSelector(state => ({
    filterComponentState: state.filter.filterComponentState
  }));

  const selectedButtonIndex = useSelector(state => state.filterButtonState.selectedButtonIndex);

  const selectedRegionReducer = useSelector(state => state.selectedRegionReducer.selectedRegion);

  useEffect(() => {
  }, [selectedRegionReducer])

  const initialDatas = useGetCountriesQuery();
  const uniqueRegions = new Set(initialDatas.data.map(country => country.region));
  const filterBtnClick = () => {

    if (initialDatas.status === "fulfilled") {
      console.log("selectedButtonIndex " + selectedButtonIndex);
      console.log("selectedRegionReducer " + selectedRegionReducer);
      dispatch(setDatas({
        filteredCountries: initialDatas.data
          .filter(item => item.region == selectedRegionReducer
            && independanceStatus == null ? true : item.independent == independanceStatus),
      }))
      dispatch(setActiveStatus({
        filterComponentState: !filterComponentState
      }));
    }
  }

  const handleSelectedButton = (e, index) => {
    dispatch(setIndex({
      selectedButtonIndex: index,
    }))
    switch (e.target.textContent) {
      case "Yes": setIndependanceStatus(true)
      case "No": setIndependanceStatus(false)
      case "All": setIndependanceStatus(null)
    }
  }

  const handleSelectRegion = (e) => {
    dispatch(setRegion({
      selectedRegion: e.target.value
    }));
  }
  return (
    <div className="filters">
      <h3>Filters</h3>
      <div className="filter-group">
        <label>Independed</label>
        <div className="buttons">
          <button style={{ borderColor: selectedButtonIndex === 0 ? 'green' : 'transparent' }} onClick={(e) => handleSelectedButton(e, 0)}>All</button>
          <button style={{ borderColor: selectedButtonIndex === 1 ? 'green' : 'transparent' }} onClick={(e) => handleSelectedButton(e, 1)}>Yes</button>
          <button style={{ borderColor: selectedButtonIndex === 2 ? 'green' : 'transparent' }} onClick={(e) => handleSelectedButton(e, 2)}>No</button>
        </div>
      </div>
      <div className="filter-group">
        <label>Region   </label>
        <select className='regions-select' multiple onChange={(e) => handleSelectRegion(e)}>
          {[...uniqueRegions].map((region, index) => (
            <option key={index} value={region} selected={region === selectedRegionReducer}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <button id='add-filter-btn' onClick={filterBtnClick}>add filters</button>
    </div>
  );
};

export default Filters;
