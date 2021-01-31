import React from 'react'
import { changeFilterActionCreator, doFilterActionCreator } from '../../redux/newsReducer'
import s from './InputFind.module.css'


const InputField = (props) => {

    let filterString =React.createRef()

    const Change = () => {
        props.dispatch(changeFilterActionCreator(filterString.current.value))
    }

    const clickFind = () => {
        props.dispatch(doFilterActionCreator())
    }

    return (
        <div>
            <input type="text" placeholder='Поиск' 
            className={s.inputFind} ref={filterString}
            onChange = {Change} value={props.filterText}/>
            <button onClick= {clickFind}>fdgdf</button>
        </div>
    )
}

export default InputField
