import React from 'react';
import './SelectedCard.css';
import Location from '../Location/Location';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SelectedCard = () => {

    const location = useLocation();
    const country = location.state;
    return (

        <div className="app-container">
            <Header />
            <div className="main-content">
                <div className='selected-card-div'>
                    <div className="left-side">
                        <div className="country-info">
                            <h2>Country Information</h2>
                            <div className="section">
                                <h3>Names</h3>
                                <p>&emsp;<strong>Common:</strong> {country?.name.common}</p>
                                <p>&emsp;<strong>Official:</strong> {country?.official}</p>
                                <p><strong>Native names:</strong></p>
                                <p>&emsp;<strong>Common:</strong>{country?.name?.nativeName != undefined ? country?.name?.nativeName[Object.keys(country?.name?.nativeName)[0]]?.common : "not found"}</p>
                                <p>&emsp;<strong>Official:</strong> {country?.name?.nativeName != undefined ? country?.name?.nativeName[Object.keys(country?.name?.nativeName)[0]]?.official : "not found"}</p>
                            </div>
                            <div className="section">
                                <p><strong>Capital</strong></p>
                                <p>&emsp;<strong>{country.capital}</strong></p>
                            </div>
                            <div className="section">
                                <p><strong>Region</strong></p>
                                <p>&emsp;<strong>{country.region}</strong></p>
                            </div>

                            <div className="section">
                                <p><strong>SubRegion</strong></p>
                                <p>&emsp;<strong>{country.subregion}</strong></p>
                            </div>

                            <div className="section">
                                <p><strong>Population</strong></p>
                                <p>&emsp;<strong>{country.population}</strong></p>
                            </div>

                            <div className="section">
                                <h3>Currencies</h3>
                                <p>&emsp;<strong>Name:</strong> {country?.currencies != undefined ? country?.currencies[Object.keys(country?.currencies)[0]]?.name : "not found"}</p>
                                <p>&emsp;<strong>Symbol:</strong>{country?.currencies != undefined ? country?.currencies[Object.keys(country?.currencies)[0]]?.symbol : "not found"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-side">
                        <img src={`${country?.flags?.svg}`} alt={`${country?.name[0]} flag`} />
                        <img src={`${country?.coatOfArms?.svg}`} alt={`${country?.name[0]} flag`} />
                        <Location position={[country.latlng[0], country.latlng[1]]} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SelectedCard;
