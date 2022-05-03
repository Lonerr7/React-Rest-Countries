import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import s from './Country.module.scss';
import CountryInfo from './CountryInfo/CountryInfo';
import Preloader from '../common/Preloader/Preloader';
import { useTransition, animated } from 'react-spring';

const Country = (props) => {
  const country = props.country;
  const navigate = useNavigate();

  const transition = useTransition(props.isCountry, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 200,
  });

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={s.country}>
      <button className={s.country__backLink} onClick={goBackHandler}>
        <BiArrowBack className={s.country__arrowBack} />
        Back
      </button>
      {transition((style, item) => {
        return item ? (
          <animated.div style={style} className={s.country__countryInfoBox}>
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
          </animated.div>
        ) : (
          <Preloader />
        );
      })}
    </div>
  );
};

export default Country;
