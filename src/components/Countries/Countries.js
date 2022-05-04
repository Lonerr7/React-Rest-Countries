import Preloader from '../common/Preloader/Preloader';
import s from './Countries.module.scss';
import CountryCard from './CountryCard/CountryCard';
import Controls from '../Controls/Controls';
import { useSelector } from 'react-redux';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const filteredCountries = useSelector(
    (state) => state.countries.filteredCountries
  );
  const isFetching = useSelector((state) => state.countries.isFetching);

  const countriesElements = filteredCountries.map((c) => (
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
      {isFetching ? (
        <Preloader />
      ) : (
        <div
          className={
            countries.length !== 0 ? s.countries : `${s.countries} ${s.hidden}`
          }
        >
          {countriesElements}
        </div>
      )}
    </div>
  );
};

export default Countries;
