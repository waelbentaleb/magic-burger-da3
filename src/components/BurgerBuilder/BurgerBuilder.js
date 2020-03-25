import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'

class BurgerBuilder extends Component {

  state = {
    ingredients: [
      {
        id: "aze",
        label: 'Salad',
        count: 1
      },
      {
        id: "sqa",
        label: 'Cheese',
        count: 2
      },
      {
        id: "dez",
        label: 'Meat',
        count: 0
      },
      {
        id: "gtq",
        label: 'Escalope',
        count: 1
      }
    ]
  }

  addIngredientHandler = (id) => {
    let newIngredient = [...this.state.ingredients]

    const index = newIngredient.findIndex((item) => {
      return item.id === id
    })

    newIngredient[index].count++

    this.setState({
      ingredients: newIngredient
    })
  }

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler} />
      </div>
    )
  }
}

export default BurgerBuilder