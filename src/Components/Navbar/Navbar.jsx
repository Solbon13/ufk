import React from 'react'

import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <ul className={s.navMenu}>
                <li className={s.navItem}><a className={s.navLinks} href="/">Главная</a></li>
                <li className={s.navItem}><a className={s.navLinks} href="/docs">Документация</a></li>
                <li className={s.navItem}><a className={s.navLinks} href="/forum">Форум</a></li>
                <li className={s.navItem}><a className={s.navLinks} href="/dialogs">Диалоги</a></li>
                <li className={s.navItem}><a className={s.navLinks} href="/ratings">Рейтинг</a></li>
            </ul>
        </div>
    )
}

export default Navbar
