import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './ThemaForum.module.css'

const ThemaForum = (props) => {
    return (
        <div className={s.card}>
  <p>
    {props.id}
  </p>
  <NavLink to={'/docs/'+ props.id}>
  <h2>
    {props.name}
  </h2>
  </NavLink>
</div>
    )
}

export default ThemaForum
