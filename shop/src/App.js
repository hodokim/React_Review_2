import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeMaker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>   
      
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {
            shoes.map((x, i) => {
              return (
                <ProductInfo shoes={x} index={i} key={i}></ProductInfo>
              )
            })
          }





        </div>
      </div>

    </div>
  );
}

let ProductInfo = (props) => {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.index + 1) + ".jpg"} alt={props.index} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
