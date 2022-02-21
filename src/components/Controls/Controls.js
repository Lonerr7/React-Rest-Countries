import Search from './Search/Search';
import s from './Controls.module.scss';
import { connect } from 'react-redux';
import {
  changeSearchTextAC,
  displaySearchedCountriesAC,
} from '../../redux/appReducer';

const Controls = (props) => {
  return (
    <div className={s.controls}>
      <Search
        searchText={props.searchText}
        changeSearchText={props.changeSearchText}
        displaySearchedCountries={props.displaySearchedCountries}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchText: state.app.searchText,
});

const dispatchToProps = {
  displaySearchedCountries: displaySearchedCountriesAC,
  changeSearchText: changeSearchTextAC,
};

export default connect(mapStateToProps, dispatchToProps)(Controls);
