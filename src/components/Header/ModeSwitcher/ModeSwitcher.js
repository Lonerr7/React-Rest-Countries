import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import s from './ModeSwitcher.module.scss';

const ModeSwitcher = (props) => {
  const onChangeTheme = () => {
    const theme = props.theme === 'light' ? 'dark' : 'light';
    props.changeTheme(theme);
  };

  return (
    <div>
      {props.theme === 'light' ? (
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
