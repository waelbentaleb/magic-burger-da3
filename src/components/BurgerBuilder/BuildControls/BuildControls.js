import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {

  let ingredientsControl = []

  for (let item of props.ingredients) {
    ingredientsControl.push(
      <BuildControl
        label={item.label}
        addIngredient={() => { props.addIngredient(item.id) }}
        removeIngredient={() => { props.removeIngredient(item.id) }}
        disableRemoving={item.count === 0} />
    )
  }

  return (
    <div className={classes.BuildControls}>
      <p>Current Price : {props.totalPrice} DT</p>
      {ingredientsControl}
      <button className={classes.OrderButton} >Order Now</button>
    </div>
  )
}

export default buildControls