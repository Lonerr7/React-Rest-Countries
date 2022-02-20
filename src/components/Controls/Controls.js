import Search from './Search/Search';
import s from './Controls.module.scss';
import CustomSelect from './CustomSelect/CustomSelect';
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
      <CustomSelect />
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
