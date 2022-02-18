import { NavLink } from 'react-router-dom';
import s from '../CountryInfo.module.scss';

const CountryBorders = () => {
  return (
    <div className={s.countryInfo__bordersBox}>
      <p className={s.countryInfo__bordersTitle}>Border Countries:</p>
      <div className={s.countryInfo__borders}>
        <NavLink className={s.countryInfo__borderLink} to="/">
          Border
        </NavLink>
        <NavLink className={s.countryInfo__borderLink} to="/">
          Border
        </NavLink>
        <NavLink className={s.countryInfo__borderLink} to="/">
          Border
        </NavLink>
        <NavLink className={s.countryInfo__borderLink} to="/">
          Border
        </NavLink>
        <NavLink className={s.countryInfo__borderLink} to="/">
          Border
        </NavLink>
        <NavLink className={s.countryInfo__borderLink} to="/">
          Border
        </NavLink>
      </div>
    </div>
  );
};

export default CountryBorders;
