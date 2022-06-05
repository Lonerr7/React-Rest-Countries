import Search from './Search/Search';
import s from './Controls.module.scss';

const Controls: React.FC = () => {
  return (
    <div className={s.controls}>
      <Search />
    </div>
  );
};

export default Controls;
