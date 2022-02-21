import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import s from './Countries.module.scss';
import CountryCard from './CountryCard/CountryCard';
import Controls from '../Controls/Controls';

const Countries = (props) => {
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
      {props.countries.length === 0 ? (
        <Preloader />
      ) : (
        <div className={s.countries}>{countriesElements}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.app.countries,
  filteredCountries: state.app.filteredCountries,
});

export default connect(mapStateToProps, null)(Countries);
