import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {

  let ingredientsControl = []

  for (let item of props.ingredients) {
    ingredientsControl.push(
      <BuildControl
        label={item.label}
        addIngredient={() => { props.addIngredient(item.id) }} />
    )
  }

  return (
    <div className={classes.BuildControls}>
      <p>Current Price : 4 TND</p>
      {ingredientsControl}
      <button className={classes.OrderButton} >Order Now</button>
    </div>
  )
}

export default buildControls