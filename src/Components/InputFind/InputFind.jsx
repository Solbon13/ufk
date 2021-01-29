import React from 'react'
import s from './InputFind.module.css'

const InputField = (props) => {
    return (
        <div>
            <input type="text" placeholder='Поиск' className={s.inputFind} ref={props.reftest}/>
        </div>
    )
}

export default InputField
