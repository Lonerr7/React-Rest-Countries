import s from './../CountryInfo.module.scss';

type CountryTextProps = {
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currency: string;
  language: string;
};

const CountryText: React.FC<CountryTextProps> = (props) => {
  return (
    <div className={s.countryInfo__box}>
      <div className={s.countryInfo__textBox}>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Native Name: </span> {props.nativeName}
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Population: </span>
          {props.population.toLocaleString()}
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Region: </span> {props.region}
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Sub Region: </span> {props.subRegion}
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Capital: </span> {props.capital}
        </p>
      </div>
      <div className={s.countryInfo__textBox}>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Top Level Domain: </span>{' '}
          {props.topLevelDomain}
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Currency: </span> {props.currency}
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Language: </span> {props.language}
        </p>
      </div>
    </div>
  );
};

export default CountryText;
