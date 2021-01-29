import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <ul className={s.navMenu}>
                <li className={s.navItem}>
                    <NavLink activeClassName={s.activeLink} className={s.navLinks} to="/" >Главная</NavLink>
                    </li>
                <li className={s.navItem}>
                    <NavLink className={s.navLinks} activeClassName={s.activeLink} to="/docs">Документация</NavLink>
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
        </div>
    )
}

export default Navbar
