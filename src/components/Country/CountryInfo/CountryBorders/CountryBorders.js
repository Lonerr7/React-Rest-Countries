import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from '../CountryInfo.module.scss';

const CountryBorders = () => {
  const countryNeighbors = useSelector(
    (state) => state.currentCountry.currentCountryNeighbors
  );

  const neighborsElements = countryNeighbors.map((n) => (
    <NavLink
      className={s.countryInfo__borderLink}
      key={n.name.common}
      to={`/React-Rest-Countries/countries/${n.name.common}`}
    >
      {n.name.common}
    </NavLink>
  ));

  return (
    <div className={s.countryInfo__bordersBox}>
      <p className={s.countryInfo__bordersTitle}>Border Countries:</p>
      <div className={s.countryInfo__borders}>{neighborsElements}</div>
    </div>
  );
};

export default CountryBorders;
