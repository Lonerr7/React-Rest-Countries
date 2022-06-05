import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { changeTheme } from '../../../redux/themeSlice';
import s from './ModeSwitcher.module.scss';

const ModeSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const onChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme({ newTheme }));
    document.body.setAttribute('data-theme', newTheme);
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
