// import {createStore} from 'redux'
import { configureStore,createSlice } from "@reduxjs/toolkit";


export interface StateType {
    counter:number
}
// interface ActionType{
//     type:string
//     counter?:number
//     payload?:number
// }

// const reducerFn = (state:StateType = {counter:0},action:ActionType)=>{

//     if(action.type==='INC'){
//         return {counter:state.counter+1}      
//     }

//     if(action.type==='DEC'){
//         return {counter:state.counter-1} 
//     }

//     if(action.type==='ADDBY' && action.payload){
//         return {counter:state.counter + action.payload}
//     }
    
//     return state
// }

// const store = createStore(reducerFn)

// export default store



const counterSlice = createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        addBy(state,action){
            state.counter+=action.payload
        }
    }
})
const store = configureStore({reducer:counterSlice.reducer})
export const actions = counterSlice.actions 
export default store