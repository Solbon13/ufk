import React from 'react'

import s from './Filters.module.css'
import InputField from '../../Components/InputFind/InputFind'

const Filters = () => {

    let filterString =React.createRef()

    let testOnClick = () => {
        let text = filterString.current.value;
        alert(text)
    }

    return (
        <div className={s.container}>
            <button onClick={testOnClick}>fdgdf</button>
            <InputField reftest={filterString}/>
        </div>
    )
}

export default Filters
