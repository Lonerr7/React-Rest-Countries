import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import s from './Country.module.scss';
import CountryInfo from './CountryInfo/CountryInfo';

const Country = () => {
  return (
    <div className={s.country}>
      <NavLink className={s.country__backLink} to="/">
        <BiArrowBack className={s.country__arrowBack} />
        Back
      </NavLink>
      <div className={s.country__countryInfoBox}>
        <div className={s.country__countryFlagBox}>
          <img
            className={s.country__countryFlag}
            src="https://flagcdn.com/im.svg"
            alt="flag"
          />
        </div>
        <CountryInfo />
      </div>
    </div>
  );
};

export default Country;
