import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem active> BurgerBuilder </NavigationItem>
      <NavigationItem > Checkout </NavigationItem>
    </ul>
  )
}

export default navigationItems