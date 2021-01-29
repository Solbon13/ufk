import React from 'react'

import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <ul className={s.navMenu}>
                <li className={s.navItem}><a className={s.navLinks} href="/">Главная</a></li>
                <li className={s.navItem}><a className={s.navLinks} href="/">Документация</a></li>
                <li className={s.navItem}><a className={s.navLinks} href="/">Форум</a></li>
                <li className={s.navItem}><a className={s.navLinks} href="/">Диалоги</a></li>
                <li className={s.navItem}><a className={s.navLinks} href="/">Рейтинг</a></li>
            </ul>
        </div>
    )
}

export default Navbar
