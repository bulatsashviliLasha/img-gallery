import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../assets/img/logo.svg';

const navbarStyle = {
  backgroundColor: '#1D1F22',
};

const Header = ({ title }) => {
  return (
    <div>
      <Navbar style={navbarStyle} variant="light">
        <Container>
          <Logo style={{ maxWidth: '12rem', maxHeight: '3.5rem', width: '100%' }} />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
