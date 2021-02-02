import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './Button.module.css'

const Button = (props) => {
    return (
        <div>
            <NavLink to="/main" className={s.btnMobiles}>
                <button className={`${s.btn} ${s.btnOutline} ${s.btnLarge}`}>{props.children}</button>
            </NavLink>
        </div>
    )
}

export default Button
