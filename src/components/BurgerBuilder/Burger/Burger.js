import React, { Component } from 'react'
import classes from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient'

class Burger extends Component {

  shouldComponentUpdate = (nextProp, nextState) => {
    console.log('[Burger.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate = () => {
    console.log('[Burger.js] componentDidUpdate')
  }

  render() {
    console.log('[Burger.js] rendering');

    let list = []

    for (let item of this.props.ingredients) {
      for (let i = 0; i < item.count; i++) {
        list.push(
          <Ingredient type={item.label} key={item.id + '_' + i} />
        )
      }
    }

    let message = null

    if (list.length === 0)
      message = <p>Please start adding ingredients !!</p>

    return (
      <div className={classes.Burger}>
        <Ingredient type="BreadTop" />
        {message}
        {list}
        <Ingredient type="BreadBottom" />
      </div>
    )
  }
}

export default Burger