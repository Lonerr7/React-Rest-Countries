import Container from '../common/Container/Container';

const Main = (props) => {
  return (
    <div>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Main;
