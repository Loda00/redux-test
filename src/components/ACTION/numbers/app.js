export const NUMBERS = 'NUMBERS'

export function arrayNumbers(numbers) {
    return {
        type: NUMBERS,
        payload: numbers
    }
}