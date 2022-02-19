import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import s from './Country.module.scss';
import CountryInfo from './CountryInfo/CountryInfo';
import Preloader from '../common/Preloader/Preloader';

const Country = (props) => {
  const country = props.country;

  return (
    <div className={s.country}>
      <NavLink className={s.country__backLink} to="/">
        <BiArrowBack className={s.country__arrowBack} />
        Back
      </NavLink>
      {Object.keys(props.country).length === 0 ? (
        <Preloader />
      ) : (
        <div className={s.country__countryInfoBox}>
          <div className={s.country__countryFlagBox}>
            <img
              className={s.country__countryFlag}
              src={country.flags.svg}
              alt="flag"
            />
          </div>
          <CountryInfo
            name={country.name.common}
            rawNativeName={country.name.nativeName}
            population={country.population}
            region={country.region}
            subRegion={country.subregion}
            capital={country.capital[0]}
            topLevelDomain={country.tld[0]}
            rawCurrency={country.currencies}
            rawLanguage={country.languages}
            countryNeighbors={props.countryNeighbors}
          />
        </div>
      )}
    </div>
  );
};

export default Country;