import { NavLink } from 'react-router-dom';
import Container from '../common/Container/Container';
import s from './Header.module.scss';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';

const Header: React.FC = () => {
  return (
    <div className={s.header__wrapper}>
      <Container>
        <div className={s.header}>
          <NavLink to="/React-Rest-Countries/" className={s.homeLink}>
            Where in the world?
          </NavLink>
          <ModeSwitcher />
        </div>
      </Container>
    </div>
  );
};

export default Header;
