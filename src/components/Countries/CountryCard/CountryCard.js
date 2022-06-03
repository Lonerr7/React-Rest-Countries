import { NavLink } from 'react-router-dom';
import s from './CountryCard.module.scss';

const CountryCard = (props) => {
  return (
    <div className={s.countryCard}>
      <NavLink
        className={s.countryCard__flagLink}
        to={`/React-Rest-Countries/countries/${props.countryName}`}
      >
        <img
          className={s.countryCard__flag}
          src={props.flagURL}
          alt="countryFlag"
        />
      </NavLink>
      <div className={s.countryCard__info}>
        <NavLink
          className={s.countryCard__name}
          to={`/React-Rest-Countries/countries/${props.countryName}`}
        >
          {props.countryName}
        </NavLink>
        <p className={s.countryCard__about}>
          <span className={s.bold}>Population: </span>
          {props.population.toLocaleString()}
        </p>
        <p className={s.countryCard__about}>
          <span className={s.bold}>Region:</span> {props.region}
        </p>
        <p className={s.countryCard__about}>
          <span className={s.bold}>Capital:</span>{' '}
          {props.capital ? props.capital : 'No Capital'}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
