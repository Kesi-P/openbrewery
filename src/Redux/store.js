import { createStore, applyMiddleware } from 'redux'
import { allBrewreducer } from './reducer'
import thunk from 'redux-thunk'

//enable Redux Thunk, use applyMiddleware():
export const store = createStore(allBrewreducer, applyMiddleware(thunk));