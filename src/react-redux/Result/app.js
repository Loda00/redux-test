import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Result = props => {
    const { sumar, multiplicar, valores } = props
    console.log('props', sumar, multiplicar, valores )
    return (
        <Fragment>
            <div>{ sumar ? <div> La suma es {sumar} </div> : <div></div>}</div>
            <div>{ multiplicar ? <div> La multiplicacion es : {multiplicar}</div>: ''}</div>
            <div>{valores.length !== 0 ? <div>Los valores son[{valores.toString()}]</div> : ''}</div>
        </Fragment>
    )
}


const mapStateToProps = state => ({
    sumar: state.sumar,
    multiplicar: state.multiplicar,
    valores: state.valores
})


export default connect(mapStateToProps)(Result)