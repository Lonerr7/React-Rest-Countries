import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import s from './Countries.module.scss';
import CountryCard from './CountryCard/CountryCard';
import Controls from '../Controls/Controls';

const Countries = (props) => {
  const isCountries = props.countries.length === 0 ? false : true;

  const countriesElements = props.filteredCountries.map((c) => (
    <CountryCard
      key={c.name.common}
      flagURL={c.flags.svg}
      countryName={c.name.common}
      population={c.population}
      region={c.region}
      capital={c.capital}
    />
  ));

  return (
    <div>
      <Controls />
      {!isCountries ? (
        <Preloader />
      ) : (
        <div
          className={
            props.countries.length !== 0
              ? s.countries
              : `${s.countries} ${s.hidden}`
          }
        >
          {countriesElements}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.app.countries,
  filteredCountries: state.app.filteredCountries,
});

export default connect(mapStateToProps, null)(Countries);
