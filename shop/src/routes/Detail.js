import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

let DetailBox = (props) => {
    let { id } = useParams();
    let [eventFlag, setEvnFlag] = useState(true);
    let [num, setNum] = useState('');

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
        </div>
    )
}

export default DetailBox;