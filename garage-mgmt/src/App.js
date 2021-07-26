import logo from './logo.svg';
import HeaderComponent from './components/header/header.tsx';
// or less ideally
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import {cities} from './common/common.tsx';
function App() {
  console.log(cities.filter(item=>item.name));
  return (
    <div className="_mainWrapper">
   <Container fluid>
   <>
  
</>
</Container>
    </div>
  );
}

export default App;
