import CountryBorders from './CountryBorders/CountryBorders';
import s from './CountryInfo.module.scss';
import CountryText from './CountryText/CountryText';

const CountryInfo = () => {
  return (
    <div className={s.countryInfo}>
      <p className={s.countryInfo__countryName}>Country Name</p>
      <CountryText />
      <CountryBorders />
    </div>
  );
};

export default CountryInfo;
