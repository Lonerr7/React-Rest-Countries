import s from './Container.module.scss';

type ContainerProps = {
  children: JSX.Element;
};

const Container: React.FC<ContainerProps> = (props) => {
  return <div className={`${s.container}`}>{props.children}</div>;
};

export default Container;
