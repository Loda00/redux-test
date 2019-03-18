import { MULTIPLICAR, SUMAR, VALORES } from '../../Actions/Calculos/app'

const defaultStateSuma = 0
const defaultStateMultiplicacion = 0
const defaultStateValores = []

export function sumar(state = defaultStateSuma, action) {
    switch (action.type) {
        case SUMAR:
            return action.payload
        default:
            return state
    }
}

export function multiplicar(state = defaultStateMultiplicacion, action) {
    switch (action.type) {
        case MULTIPLICAR:
            return action.payload
        default:
            return state
    }
}

export function valores(state = defaultStateValores, action) {
    switch (action.type) {
        case VALORES:
            return action.payload
        default:
            return state
    }
}

