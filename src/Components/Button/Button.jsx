import React from 'react'

import s from './Button.module.css'

const Button = (props) => {
    return (
        <div>
            <a href="" className={s.btnMobiles}>
                <button className={`${s.btn} ${s.btnOutline} ${s.btnLarge}`}>{props.children}</button>
            </a>
        </div>
    )
}

export default Button
