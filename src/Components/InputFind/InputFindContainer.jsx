import { connect } from 'react-redux'
import { changeFilterAction, doFilterAction } from '../../redux/newsReducer'
import InputFind from './InputFind'

let mapStateToProps = (state) => {
    return {
        filterText: state.filterText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Change: (text) => {dispatch(changeFilterAction(text))},
        clickFind: () => {dispatch(doFilterAction())}
    }
}

const InputFindContainer = connect(mapStateToProps, mapDispatchToProps)(InputFind)

export default InputFindContainer
