import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import s from './Country.module.scss';
import CountryInfo from './CountryInfo/CountryInfo';

const Country = (props) => {
  const country = props.country;
  const capital = country.hasOwnProperty('capital')
    ? country.capital[0]
    : 'No capital';
  const rawCurrency = country.hasOwnProperty('currencies')
    ? country.currencies
    : null;
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={s.country}>
      <button className={s.country__backLink} onClick={goBackHandler}>
        <BiArrowBack className={s.country__arrowBack} />
        Back
      </button>
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
          capital={capital}
          topLevelDomain={country.tld[0]}
          rawCurrency={rawCurrency}
          rawLanguage={country.languages}
        />
      </div>
    </div>
  );
};

export default Country;
