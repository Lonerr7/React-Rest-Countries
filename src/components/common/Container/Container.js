import s from './Container.module.scss';

const Container = (props) => {
  return (
    <div className={`${s.container} ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

export default Container;
