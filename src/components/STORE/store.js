import { combineReducers, createStore } from 'redux'
import { showResultReducer } from '../REDUCER/app'
import { multi } from '../REDUCER/app2'
import { arrayNumbers } from '../REDUCER/app3'


const reducers = combineReducers({
    showResultReducer,
    multi,
    arrayNumbers
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())