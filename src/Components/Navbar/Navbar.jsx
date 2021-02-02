import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import s from './Navbar.module.css'

const Navbar = () => {
    const style = {
        color: 'black',
        fontWeight: 'bold'
    }
    return (
        <div>
            <ul className={s.navMenu}>
                <li className={s.navItem}>
                    <NavLink exact to="/main" className={s.navLinks} activeClassName='activeLink'>Главная</NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink exact className={s.navLinks} activeStyle={style} to="/docs">Документация</NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={s.navLinks} to="/forum">Форум</NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={s.navLinks} to="/dialogs">Диалоги</NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={s.navLinks} to="/ratings">Рейтинг</NavLink>
                </li>
            </ul>
        </div >
    )
}

export default withRouter(Navbar)
