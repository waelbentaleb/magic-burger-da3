import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.module.css'

const navigationItem = (props) => {

  // let activeClass = props.active ? classes.active : null

  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.target}
        activeClassName={classes.Active}
        exact
      >
        {props.children}
      </NavLink>
      {/* <a href='/' className={props.active ? classes.Active : null}>
        {props.children}
      </a> */}
    </li>
  )
}

export default navigationItem 