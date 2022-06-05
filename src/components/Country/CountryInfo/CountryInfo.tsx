import CountryBorders from './CountryBorders/CountryBorders';
import s from './CountryInfo.module.scss';
import CountryText from './CountryText/CountryText';

type CountryInfoProps = {
  name: string;
  rawNativeName: any;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  rawCurrency: any;
  rawLanguage: any;
};

const CountryInfo: React.FC<CountryInfoProps> = (props) => {
  const [nativeNameKey] = Object.keys(props.rawNativeName);
  const currencies = props.rawCurrency ? Object.keys(props.rawCurrency) : null;
  const [languageKey] = Object.keys(props.rawLanguage);

  const currency = currencies
    ? props.rawCurrency[currencies[0]].name
    : 'No Currencies';

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
        currency={currency}
        language={props.rawLanguage[languageKey]}
      />
      <CountryBorders />
    </div>
  );
};

export default CountryInfo;
