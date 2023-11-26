import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Button } from 'react-bootstrap'
import { increment, decrement } from './store/counter/counterAction';

function App() {

  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.CounterReducer.value)

  return (
    <>
      <Button onClick={() => {dispatch(increment())}}>Increment</Button>
      <Button onClick={() => {dispatch(decrement())}}>Decrement</Button>
      {counterValue}
    </>
  )
}

export default App