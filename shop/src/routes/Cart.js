import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../store'


let Cart = ()=>{
    let cartInfo = useSelector((state)=> state.cart );
    let dispatch = useDispatch();
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartInfo.map((item,index)=>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                                <button onClick={
                                    ()=>{
                                        dispatch(setCount({ count: 1, id: item.id }))
                                    }
                                }>+</button>
                                <button onClick={
                                    ()=>{
                                        dispatch(setCount({ count : -1, id : item.id}))
                                    }
                                }
                                >-</button></td>
                            </tr>                            
                        )
                    })
                }

            </tbody>
        </Table> 
    )
}

export default Cart