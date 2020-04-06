import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem target='/'> Burger Builder </NavigationItem>
      <NavigationItem target='/orders'> My Orders </NavigationItem>
    </ul>
  )
}

export default navigationItems