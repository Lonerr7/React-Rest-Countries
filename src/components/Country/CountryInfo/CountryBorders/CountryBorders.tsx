import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/hooks';
import s from '../CountryInfo.module.scss';

const CountryBorders: React.FC = () => {
  const countryNeighbors = useAppSelector(
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
