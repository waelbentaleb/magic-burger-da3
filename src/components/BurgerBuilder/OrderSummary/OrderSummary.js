import React from 'react'
import classes from './OrderSummary.module.css'

const orderSummary = (props) => {

  // let listOfIngredients = []

  // for (let ingredient of props.ingredients) {
  //   listOfIngredients.push(
  //     <li>{ingredient.label}: {ingredient.count}</li>
  //   )
  // }

  let listOfIngredients = props.ingredients.map((ingredient) => {
    return <li>{ingredient.label}: {ingredient.count}</li>
  })

  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {listOfIngredients}
      </ul>
      <p>Total Price: {props.totalPrice}</p>
      <p>Continue to checkout ?</p>

      <button
        className={classes.Button + ' ' + classes.Danger}
        onClick={props.showOrHideModal}
      >
        Cancel
      </button>

      <button className={classes.Button + ' ' + classes.Success}>Continue</button>
    </div>
  )
}

export default orderSummary