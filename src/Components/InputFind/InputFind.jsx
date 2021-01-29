import React from 'react'
import s from './InputFind.module.css'

const InputField = () => {
    return (
        <div>
            <input type="text" placeholder='Поиск'  className={s.inputFind} />
        </div>
    )
}

export default InputField
