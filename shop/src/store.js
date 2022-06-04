import { configureStore, createSlice } from '@reduxjs/toolkit'


let cart = createSlice({
    name : 'cart',
    initialState : 
    [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers : {
        setCount(state, action){
            let id = state.findIndex((item)=>{
                return item.id === action.payload.id
            });
            state[id].count = (state[id].count+ parseInt(action.payload.count))
        },
        addCart(state, action){
            let id = state.findIndex((item) => {
                return item.id === action.payload.id
            });

            id === -1 
                ? state.push(action.payload)
                : state[id].count += 1 
        }
    }
})

export let {setCount, addCart} = cart.actions


export default configureStore({
    reducer: {
        cart : cart.reducer
    }
}) 