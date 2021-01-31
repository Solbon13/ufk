import React from 'react'
import s from './InputFind.module.css'

const InputField = (props) => {

    let filterString =React.createRef()

    const Change = () => {
        props.dispatch({type: 'SET_FILTER_TEXT', text: filterString.current.value})
    }

    return (
        <div>
            <input type="text" placeholder='Поиск' 
            className={s.inputFind} ref={filterString}
            onChange = {Change} value={props.filterText}/>
        </div>
    )
}

export default InputField
