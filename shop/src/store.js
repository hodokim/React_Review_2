import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user2222',
    initialState : 'Kim'
})


export default configureStore({
    reducer: {
        user1 : user.reducer
    }
}) 