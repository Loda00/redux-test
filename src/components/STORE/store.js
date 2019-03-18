import { combineReducers, createStore } from 'redux'
import { showResultReducer } from '../REDUCER/app'
import { multi } from '../REDUCER/app2'


const reducers = combineReducers({
    showResultReducer,
    multi
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())