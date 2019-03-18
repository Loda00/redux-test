import { combineReducers } from 'redux'
import { multiplicar,sumar,valores } from './Calculos/app'

export const reducers = combineReducers({
    multiplicar,
    sumar,
    valores
})