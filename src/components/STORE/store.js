import { combineReducers, createStore } from 'redux'
import { showResultReducer } from '../REDUCER/app'

const reducers = combineReducers({
    showResultReducer
})

export const store = createStore(reducers)