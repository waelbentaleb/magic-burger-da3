import React from 'react'
import classes from './NavigationItem.module.css'

const navigationItem = (props) => {

  // let activeClass = props.active ? classes.active : null

  return (
    <li className={classes.NavigationItem}>
      <a href='/' className={props.active ? classes.Active : null}>
        {props.children}
      </a>
    </li>
  )
}

export default navigationItem 