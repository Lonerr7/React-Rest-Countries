import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeThemeTC } from '../../redux/appReducer';
import Container from '../common/Container/Container';
import s from './Header.module.scss';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';

const Header = (props) => {
  return (
    <div className={s.header__wrapper}>
      <Container>
        <div className={s.header}>
          <NavLink to="/React-Rest-Countries/" className={s.homeLink}>
            Where in the world?
          </NavLink>
          <ModeSwitcher {...props} />
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});

const dispatchToProps = {
  changeTheme: changeThemeTC,
};

export default connect(mapStateToProps, dispatchToProps)(Header);