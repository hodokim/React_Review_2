import { useParams } from "react-router-dom";
import styled from 'styled-components'

let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
`

let DetailBox = (props) => {
    let {id} = useParams();
    return (
        <div className="container">
            <YellowBtn>button</YellowBtn>
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