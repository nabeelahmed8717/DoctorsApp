import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div>
        <nav className={classes.main_nav}>
            <div className={classes.logo}></div>
            <div className={classes.flex}>
                <NavLink to='/Home'><p className={classes.nav_btns}>Home</p></NavLink>
                <NavLink to='/ShowAllAppointments'><p className={classes.nav_btns}>Show all appointments</p></NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Header