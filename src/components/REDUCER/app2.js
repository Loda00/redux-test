import { SHOW_MULTIPLICATION } from '../ACTION/multiplication/app'

const defaultState = 0

export function multi(state = defaultState, action) {
    switch (action.type) {
        case SHOW_MULTIPLICATION:
            return action.payload
        default:
            return state
    }
}