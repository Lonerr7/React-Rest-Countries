import { IoSearch } from 'react-icons/io5';
import s from './Search.module.scss';
import {
  changeSearchText,
  displaySearchedCountries,
} from '../../../redux/countriesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import React from 'react';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.countries.searchText);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchText({ newText: e.target.value }));
    dispatch(displaySearchedCountries());
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
          onChange={onSearchChange}
          value={searchText}
        />
      </label>
    </div>
  );
};

export default Search;
