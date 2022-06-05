import Container from '../common/Container/Container';

type MainProps = {
  children: JSX.Element;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

export default Main;
