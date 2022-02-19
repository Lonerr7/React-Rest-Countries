import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import {
  getCurrentCountryTC,
  getCurrentCountryAC,
} from '../../../redux/appReducer';
import Country from '../Country';

const CountryContainer = (props) => {
  const match = useMatch(`/countries/:country`);
  const currentCountry = match.params.country;

  useEffect(() => {
    props.getCurrentCounty(currentCountry);

    return () => {
      props.getCurrentCountryAC({});
    };
  }, [currentCountry]);

  return (
    <Country
      country={props.country}
      countryNeighbors={props.countryNeighbors}
    />
  );
};

const mapStateToProps = (state) => ({
  country: state.app.currentCountry,
  countryNeighbors: state.app.currentCountryNeighbors,
});

const dispatchToProps = {
  getCurrentCounty: getCurrentCountryTC,
  getCurrentCountryAC,
};

export default connect(mapStateToProps, dispatchToProps)(CountryContainer);