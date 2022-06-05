import { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
  getCurrentCountry,
  resetCurrentCountry,
} from '../../../redux/currentCountrySlice';
import { CountryType } from '../../../types/types';
import Preloader from '../../common/Preloader/Preloader';

import Country from '../Country';

const CountryContainer = () => {
  const dispatch = useAppDispatch();
  const country = useAppSelector(
    (state) => state.currentCountry.currentCountry
  ) as CountryType;

  const match = useMatch(`/React-Rest-Countries/countries/:country`)!;
  const currentCountry = match.params.country as string;
  const isCountry = Object.keys(country).length;
  console.log(currentCountry, country, isCountry);

  useEffect(() => {
    dispatch(getCurrentCountry(currentCountry));

    return () => {
      console.log(`unmount`);
      dispatch(resetCurrentCountry());
    };

    // eslint-disable-next-line
  }, [currentCountry]);

  return (
    <div>{!isCountry ? <Preloader /> : <Country country={country} />}</div>
  );
};

export default CountryContainer;
