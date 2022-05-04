import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import {
  getCurrentCountry,
  resetCurrentCountry,
} from '../../../redux/currentCountrySlice';
import Preloader from '../../common/Preloader/Preloader';

import Country from '../Country';

const CountryContainer = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.currentCountry.currentCountry);

  const match = useMatch(`/React-Rest-Countries/countries/:country`);
  const currentCountry = match.params.country;
  const isCountry = Object.keys(country).length;

  useEffect(() => {
    dispatch(getCurrentCountry({ countryName: currentCountry }));

    return () => {
      dispatch(resetCurrentCountry());
    };

    // eslint-disable-next-line
  }, [currentCountry]);

  return (
    <div>{!isCountry ? <Preloader /> : <Country country={country} />}</div>
  );
};

export default CountryContainer;
