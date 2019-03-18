import { NUMBERS } from '../ACTION/numbers/app'

const defaultState = []

export function arrayNumbers(state = defaultState, action) {
    switch (action.type) {
        case NUMBERS:
            return action.payload
        default:
            return state
    }
}