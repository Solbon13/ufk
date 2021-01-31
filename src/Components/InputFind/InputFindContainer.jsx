import React from 'react'
import { changeFilterActionCreator, doFilterActionCreator } from '../../redux/newsReducer'
import InputFind from './InputFind'

const InputFindContainer = (props) => {

    const Change = (text) => {
        props.dispatch(changeFilterActionCreator(text))
    }

    const clickFind = () => {
        props.dispatch(doFilterActionCreator())
    }

    return (<InputFind
            Change = {Change} 
            filterText={props.filterText}
            clickFind= {clickFind}/>
    )
}

export default InputFindContainer
