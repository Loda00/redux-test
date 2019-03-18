export const SUMAR = 'SUMAR'
export const MULTIPLICAR = 'MULTIPLICAR'
export const VALORES = 'VALORES'

export function sumar(value) {
    return {
        type: SUMAR,
        payload: value
    }
}

export function multiplicar(value) {
    return {
        type: MULTIPLICAR,
        payload: value
    }
}

export function valores(value) {
    return {
        type: VALORES,
        payload: value
    }
}
