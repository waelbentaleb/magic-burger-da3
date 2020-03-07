import React from 'react'
import classes from './Ingredient.module.css'

const ingredient = (props) => {

  let item

  switch (props.type) {
    case 'BreadTop':
      item = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      )
      break;

    case 'BreadBottom':
      item = <div className={classes.BreadBottom}></div>
      break;

    case 'Meat':
      item = <div className={classes.Meat}></div>
      break;

    case 'Cheese':
      item = <div className={classes.Cheese}></div>
      break;

    case 'Salad':
      item = <div className={classes.Salad}></div>
      break;

    case 'Escalope':
      item = <div className={classes.Escalope}></div>
      break;

    default:
      item = null
      break;
  }

  return item
}

export default ingredient