import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Result = props => {
    const { result, multi } = props
    return (
        <Fragment>
            <div>
                {
                    result ?
                        <div>
                            La suma es {result}
                        </div>
                        : <div></div>
                }
            </div>
            <div>
                {
                    multi ?
                        <div>
                            La multiplicacion es : {multi}
                        </div>
                        : <div></div>
                }
            </div>
        </Fragment>
    )
}


const mapStateToProps = state => ({
    result: state.showResultReducer,
    multi: state.multi
})


export default connect(mapStateToProps)(Result)