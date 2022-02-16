import { connect } from 'react-redux';
import Container from '../common/Container/Container';
import s from './Countries.module.scss';
import CountryCard from './CountryCard/CountryCard';

const Countries = (props) => {
  const countriesElements = props.countries.map((c) => (
    <CountryCard
      key={c.name.common}
      flagURL={c.flags.svg}
      countryName={c.name.common}
      population={c.population}
      region={c.region}
      capital={c.capital}
    />
  ));

  return (
    <Container>
      <div className={s.countries}>{countriesElements}</div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  countries: state.app.countries,
});

export default connect(mapStateToProps)(Countries);
