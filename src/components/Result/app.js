import React from 'react'
import { connect } from 'react-redux'

const Result = props => {
    let res = undefined
    const { result } = props
    console.log('result', props, result)
    return (
        <div>
            {
                result ?
                    <div>
                        EL resultado es {result}
                    </div>
                    : <div>Aún no a hecho ningúnn proceso</div>
            }
        </div>
    )
}


const mapStateToProps = state => ({
    result: state.result
})


export default connect(mapStateToProps)(Result)