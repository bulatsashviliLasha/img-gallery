import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../assets/img/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = ({ title }) => {
  return (
    <div>
      <Navbar style={navbarStyle} variant="light">
        <Container>
          <Logo
            alt={title}
            style={{ maxWidth: '12rem', maxHeight: '3.5rem', width: '100%' }}
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
