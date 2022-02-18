import s from './../CountryInfo.module.scss'

const CountryText = () => {
  return (
    <div className={s.countryInfo__box}>
      <div className={s.countryInfo__textBox}>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Native Name: </span> Name
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Population: </span> 13921319
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Region: </span> Region
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Sub Region: </span> Sub Region
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Capital: </span> Capital
        </p>
      </div>
      <div className={s.countryInfo__textBox}>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Top Level Domain: </span> .de
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Currencies: </span> Currencies
        </p>
        <p className={s.countryInfo__infoPiece}>
          <span className={s.bold}>Languages: </span> Languages Languages
          Languages Languages
        </p>
      </div>
    </div>
  );
};

export default CountryText;
