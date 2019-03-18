export const SHOW_RESULT = 'SHOW_RESULT'

export function showResult (result) {
    return {
        type: SHOW_RESULT,
        payload: result
    }
}
