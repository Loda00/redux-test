export const SHOW_RESULT = 'SHOW_RESULT'

const defaultState = 0

export function showResultReducer(state = defaultState, action) {
    console.log(state, action)
    switch (action.type) {
        case SHOW_RESULT:
            return { ...state, result: action.payload }
        default:
            return state
    }
}