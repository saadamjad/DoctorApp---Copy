import {createStore,applyMiddleware,} from 'redux'
import reducers from '../reducers'
const store =createStore(
reducers,
{},
applyMiddleware() 


);
export default store




{/* 
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import authorize from '../reducers/authorize'

const initialstate={};
const middleware=[thunk];
const store= createStore( 
combineReducers({
    authorize
     


}),
initialstate,
compose(applyMiddleware(...middleware))

);

export default store */}