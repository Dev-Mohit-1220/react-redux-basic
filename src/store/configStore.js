import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import CounterReducer from './counter/counterReducer';


const  rootReducer = combineReducers({
    CounterReducer

})

export default function configureStore() {
    const middleware = [thunk]
    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window; 
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }
  
    return createStore(rootReducer, compose(applyMiddleware(...middleware), ...enhancers))
  }

//   export RootState = ReturnType<typeof rootReducer>