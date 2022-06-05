import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import s from './Country.module.scss';
import CountryInfo from './CountryInfo/CountryInfo';
import { CountryType } from '../../types/types';

type CountryProps = {
  country: CountryType;
};

const Country: React.FC<CountryProps> = ({ country }) => {
  const capital = country.hasOwnProperty('capital')
    ? country.capital[0]
    : 'No capital';
  const rawCurrency = country.hasOwnProperty('currencies')
    ? country.currencies
    : null as any;

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
