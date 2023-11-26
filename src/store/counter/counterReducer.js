import { INCREMENT,DECREMENT } from "./counterActionTypes";


const initialState = {
    value: 0
}

const CounterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
        return {
            ...state,
           value: action.payload
        };
        case DECREMENT:
            return {
                ...state,
                value: action.payload
            }
        default:
            return state;
    }
}

export default CounterReducer;