import React from 'react'
import Button from '../../Components/Button/Button'
import Navbar from '../../Components/Navbar/Navbar'

import s from './Header.module.css'

const Header = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navbarContainer}>
                <a href="" className={s.navbarLogo}>
                    <img src="./images/logo.png" alt="Logo" />
                </a>
            <Navbar />
            <Button >Авторизация</Button>
            </div>
        </nav>
    )
}

export default Header
