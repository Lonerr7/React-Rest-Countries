import { NavLink } from 'react-router-dom';
import s from '../CountryInfo.module.scss';

const CountryBorders = (props) => {
  const neighborsElements = props.countryNeighbors.map((n) => (
    <NavLink
      className={s.countryInfo__borderLink}
      key={n.name.common}
      to={`/countries/${n.name.common}`}
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
