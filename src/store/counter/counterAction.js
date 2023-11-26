import { INCREMENT, DECREMENT } from "./counterActionTypes"
var value=0

const increment = () => {
     value= value+1
    return {
        type: INCREMENT,
        payload: value
    }
}

const decrement = () => {
    value= value-1
    return {
        type: DECREMENT,
        payload: value
    }
}

export { increment, decrement };