import React from 'react'
import classes from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient'

const burger = (props) => {

  let list = []

  for (let item of props.ingredients) {
    for (let i = 0; i < item.count; i++) {
      list.push(
        <Ingredient type={item.label} key={item.id + '_' + i} />
      )
    }
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="BreadTop" />
      {list}
      <Ingredient type="BreadBottom" />
    </div>
  )
}

export default burger