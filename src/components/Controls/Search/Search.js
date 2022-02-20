import { IoSearch } from 'react-icons/io5';
import s from './Search.module.scss';

const Search = (props) => {

  const onSearchChange = (e) => {
    props.changeSearchText(e.target.value);
    props.displaySearchedCountries(e.target.value.toLowerCase());
  };

  return (
    <div className={s.search}>
      <label htmlFor="countriesSearch" className={s.searchLabel}>
        <IoSearch size="22px" className={s.searchIcon} />
        <input
          className={s.searchInput}
          type="search"
          id="countriesSearch"
          name="search"
          placeholder="Search for a country..."
          value={props.searchText}
          onChange={onSearchChange}
        />
      </label>
    </div>
  );
};

export default Search;
