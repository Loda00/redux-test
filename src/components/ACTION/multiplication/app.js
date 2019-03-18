export const SHOW_MULTIPLICATION = 'SHOW_MULTIPLICATION'

export function multiplication(multiplication) {
    return {
        type: SHOW_MULTIPLICATION,
        payload: multiplication
    }
}