import React from 'react'
import s from './InputFind.module.css'


const InputFind = (props) => {

    let filterString =React.createRef()

    const onChange = () => {
        props.Change(filterString.current.value)
    }

    const onClick = () => {
        props.clickFind()
    }
    return (
        <div className={s.container}>
            <input type="text" placeholder='Поиск' 
            className={s.inputFind} ref={filterString}
            onChange = {onChange} value={props.filterText}/>
            <button onClick= {onClick}>&#128269;</button>
        </div>
    )
}

export default InputFind
