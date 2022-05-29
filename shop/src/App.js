import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import {Route, Link, Routes, useNavigate, Outlet} from 'react-router-dom'
import DetailBox from './routes/Detail';


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">



      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeMaker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>   

      <Routes>
        <Route path="/" element={<MainBox shoes={shoes}></MainBox>} />
        <Route path="/detail/:id" element={<DetailBox shoes={shoes} ></DetailBox>} />

        {/* Nested Route */}
        <Route path="/event" element={<Event />}> 
          <Route path="first" element={<div>First 페이지</div>} />
          <Route path="second" element={<div>Second 페이지</div>} />
        </Route>
      </Routes>




    </div>
  );
}

let MainBox = (props) => {
  let [shoes, setShoes] = useState(props.shoes)
  return (     
    <>
      <div className="main-bg"></div>
      <div><button onClick={()=>{
        let copy = [...props.shoes];
        copy.sort((a,b)=>{
          if(a.title<b.title)           
            return -1;
          else if(a.title>b.title)
            return 1;
          else
            return 0;         
        });
        setShoes(copy);
      }}>상품명 오름차순 정렬</button></div>
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
    </>
  )
}

let ProductInfo = (props) => {
  return (
    <div className="col-md-4">
      <Link shoes={props.shoes} to={"/detail/" + props.shoes.id} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes.id+1) + ".jpg"} alt={props.index} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
    </div>
  )
}

let Event = ()=>{
  return (
    <>
      <div>이벤프 페이지 입니다.</div>
      <Outlet></Outlet>
    </>
  )
}




export default App;
