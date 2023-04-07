
import {createStore, applyMiddleware} from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducer from "../reducer"
// import CakereducerFn from "../Cakes/CakeReducer";
// import icecreamReducerfn  from "../Icecreams/IcecreamReducer";


// const rootReducers = combineReducers({cake :CakereducerFn, iceCream: icecreamReducerfn})
// const store = createStore(rootReducers)
// const middleware = thunk
// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// )
const store = createStore(reducer, applyMiddleware(thunk))


export default store;