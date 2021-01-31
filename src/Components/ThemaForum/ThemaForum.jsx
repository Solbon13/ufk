import React from 'react'
import s from './ThemaForum.module.css'

const ThemaForum = (props) => {
    return (
        <div className={s.card}>
  <p>
    {props.id}
  </p>
  <h2>
    {props.text}
  </h2>
</div>
    )
}

export default ThemaForum
