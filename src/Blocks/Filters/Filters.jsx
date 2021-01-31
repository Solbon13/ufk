import React from 'react'

import s from './Filters.module.css'
import InputField from '../../Components/InputFind/InputFind'

const Filters = (props) => {

    return (
        <div className={s.container}>
            <InputField dispatch={props.dispatch}
            filterText = {props.filterText}/>
        </div>
    )
}

export default Filters
