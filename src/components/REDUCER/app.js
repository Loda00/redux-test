import { SHOW_RESULT } from '../ACTION/result/app'

const defaultState = 0

export function showResultReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_RESULT:
            return action.payload
        default:
            return state
    }
}
