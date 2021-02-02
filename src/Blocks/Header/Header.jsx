import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Navbar from '../../Components/Navbar/Navbar'

import s from './Header.module.css'

const Header = (props) => {
    return (
        <nav className={s.navbar}>
            <div className={s.navbarContainer}>
                <NavLink to="/main" className={s.navbarLogo}>
                    <img src="./images/logo.png" alt="Logo" />
                </NavLink>
            <Navbar />
            <Button >{props.isAuth ? props.login : 'Авторизация'}</Button>
            </div>
        </nav>
    )
}

export default Header
