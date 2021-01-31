import { connect } from 'react-redux'
import { changeFilterActionCreator, doFilterActionCreator } from '../../redux/newsReducer'
import InputFind from './InputFind'

let mapStateToProps = (state) => {
    return {
        filterText: state.filterText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Change: (text) => {dispatch(changeFilterActionCreator(text))},
        clickFind: () => {dispatch(doFilterActionCreator())}
    }
}

const InputFindContainer = connect(mapStateToProps, mapDispatchToProps)(InputFind)

export default InputFindContainer
