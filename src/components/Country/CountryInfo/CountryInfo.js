import CountryBorders from './CountryBorders/CountryBorders';
import s from './CountryInfo.module.scss';
import CountryText from './CountryText/CountryText';

const CountryInfo = (props) => {
  const [nativeNameKey] = Object.keys(props.rawNativeName);
  const [currencyKey] = Object.keys(props.rawCurrency);
  const [languageKey] = Object.keys(props.rawLanguage);

  return (
    <div className={s.countryInfo}>
      <p className={s.countryInfo__countryName}>{props.name}</p>
      <CountryText
        nativeName={props.rawNativeName[nativeNameKey].common}
        population={props.population}
        region={props.region}
        subRegion={props.subRegion}
        capital={props.capital}
        topLevelDomain={props.topLevelDomain}
        currency={props.rawCurrency[currencyKey].name}
        language={props.rawLanguage[languageKey]}
      />
      <CountryBorders countryNeighbors={props.countryNeighbors} />
    </div>
  );
};

export default CountryInfo;
