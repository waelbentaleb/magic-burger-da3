import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'
import logo from '../../assets/images/logo.png'

const toolbar = () => {
  return (
    <div className={classes.Toolbar}>
      {/* <div>MENU</div> */}
      <div className={classes.Logo}>
        <img src={logo} alt="Magic Burger" />
      </div>
      <NavigationItems />
    </div>
  )
}

export default toolbar