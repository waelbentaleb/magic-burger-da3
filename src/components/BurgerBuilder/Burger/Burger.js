import React from 'react'
import classes from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient'

const burger = () => {

  // let ingredients = [
  //   {
  //     label: 'Salad',
  //     count: 1
  //   },
  //   {
  //     label: 'Cheese',
  //     count: 2
  //   },
  //   {
  //     label: 'Meat',
  //     count: 1
  //   },
  //   {
  //     label: 'Escalope',
  //     count: 0
  //   }
  // ]

  // let list = 

  return (
    <div className={classes.Burger}>
      <Ingredient type="BreadTop" />
      {/* {list} */}
      <Ingredient type="BreadBottom" />
    </div>
  )
}

export default burger