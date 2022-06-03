import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { Nav } from 'react-bootstrap';
import '../App.css';

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

let DetailBox = (props) => {
    let { id } = useParams();
    let [eventFlag, setEvnFlag] = useState(true);
    let [tab, setTab] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{setEvnFlag(false)},2000)
    });


    return (
        <div className="container">
            {
                eventFlag ? 
                <div className="alert alert-warning">2초 이내 구매시 90% 할인!</div>
                : null
            }
            <div>수량 <input onChange={(e)=>{
                e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
            }}/></div>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes[id].id+1) + ".jpg"} width="100%" alt={props.index} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                {
                    [...Array(3).keys()].map((x)=>{
                        return (
                        <Nav.Item>
                            <Nav.Link onClick={()=>{setTab(x)}} eventKey={`link${x}`}>{`버튼${x}`}</Nav.Link>
                        </Nav.Item>
                        )
                    })
                }
            </Nav>
            <TabContent tab={tab}></TabContent>
        </div>
    )
}

let TabContent= ({tab})=>{

    let [fade, setFade] = useState('')

    useEffect(()=>{
        setTimeout(() => { setFade('end') }, 100)
            
        return()=>{
            setFade('')
        }
    }, [tab])

    return (
        <div className={`start ${fade}`}>
        {
            [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
        }          
        </div>       
    )
}

export default DetailBox;