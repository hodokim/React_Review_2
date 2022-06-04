import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import {Route, Link, Routes, useNavigate, Outlet} from 'react-router-dom'
import DetailBox from './routes/Detail';
import axios from 'axios';
import CartBox from './routes/Cart.js'

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">



      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeMaker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>   

      <Routes>
        <Route path="/" element={<MainBox shoes={shoes} ></MainBox>} />
        <Route path="/detail/:id" element={<DetailBox shoes={shoes}></DetailBox>} />

        {/* Nested Route */}
        <Route path="/event" element={<Event />}> 
          <Route path="first" element={<div>First 페이지</div>} />
          <Route path="second" element={<div>Second 페이지</div>} />
        </Route>

        <Route path="/cart" element={<CartBox></CartBox>}/>
      </Routes>




    </div>
  );
}

let MainBox = (props) => {
  let [shoes, setShoes] = useState(props.shoes);
  let [listCnt, setListCnt] = useState(2);
  
  return (     
    <>
      <div className="main-bg"></div>
      <div><button onClick={()=>{
        let copy = [...shoes];
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
        {
          listCnt<4 ? 
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data' + listCnt + '.json')
                .then((result) => {
                  console.log(shoes)
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                  setListCnt(listCnt+1);
                })
                .catch((error) => {
                  console.log('에러 발생 : ' + error.message)
                })
            }}>더 보기</button>
            : null
        }

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
