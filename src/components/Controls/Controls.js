import Search from './Search/Search';
import s from './Controls.module.scss';
import CustomSelect from './CustomSelect/CustomSelect';

const Controls = () => {
  return (
    <div className={s.controls}>
      <Search />
      <CustomSelect />
    </div>
  );
};

export default Controls;
