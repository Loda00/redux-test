import { createStore } from 'redux'
import { reducers } from './Reducers/index'

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())