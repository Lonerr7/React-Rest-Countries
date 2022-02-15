import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeThemeTC } from '../../redux/appReducer';
import Container from '../common/Container/Container';
import s from './Header.module.scss';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';

const Header = (props) => {
  return (
    <Container>
      <div className={s.header}>
        <NavLink to="/" className={s.homeLink}>
          Where in the world?
        </NavLink>
        <ModeSwitcher {...props} />
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});

const dispatchToProps = {
  changeTheme: changeThemeTC,
};

export default connect(mapStateToProps, dispatchToProps)(Header);
