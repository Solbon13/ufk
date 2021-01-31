import React from 'react'

import s from './Filters.module.css'
import InputFindContainer from '../../Components/InputFind/InputFindContainer'

const Filters = (props) => {

    return (
        <div className={s.container}>
            <InputFindContainer dispatch={props.dispatch}
            filterText = {props.filterText}/>
        </div>
    )
}

export default Filters
