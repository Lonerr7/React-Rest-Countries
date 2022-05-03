import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../redux/countriesSlice';
import s from './ModeSwitcher.module.scss';

const ModeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.countries.theme);

  const onChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme({ newTheme }));
    document.body.setAttribute('data-theme', newTheme)
  };

  return (
    <div className={s.modeSwitcher}>
      {theme === 'light' ? (
        <button className={s.btn} onClick={onChangeTheme}>
          <IoMoonOutline className={s.icon} />
          Light Mode
        </button>
      ) : (
        <button className={s.btn} onClick={onChangeTheme}>
          <IoMoon className={s.icon} />
          Dark Mode
        </button>
      )}
    </div>
  );
};

export default ModeSwitcher;
