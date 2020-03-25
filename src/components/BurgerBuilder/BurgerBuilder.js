import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'

class BurgerBuilder extends Component {

  state = {
    ingredients: [
      {
        id: "aze",
        label: 'Salad',
        count: 0,
        price: 1
      },
      {
        id: "sqa",
        label: 'Cheese',
        count: 0,
        price: 1.5
      },
      {
        id: "dez",
        label: 'Meat',
        count: 0,
        price: 3
      },
      {
        id: "gtq",
        label: 'Escalope',
        count: 0,
        price: 2.3
      }
    ],
    totalPrice: 4
  }

  addIngredientHandler = (id) => {
    let newIngredient = [...this.state.ingredients]
    let newTotalPrice = this.state.totalPrice

    const index = newIngredient.findIndex((item) => {
      return item.id === id
    })

    newIngredient[index].count++
    newTotalPrice += newIngredient[index].price

    this.setState({
      ingredients: newIngredient,
      totalPrice: newTotalPrice
    })
  }

  removeIngredientHandler = (id) => {
    let newIngredient = [...this.state.ingredients]
    let newTotalPrice = this.state.totalPrice

    const index = newIngredient.findIndex((item) => {
      return item.id === id
    })

    newIngredient[index].count--
    newTotalPrice -= newIngredient[index].price

    this.setState({
      ingredients: newIngredient,
      totalPrice: newTotalPrice
    })
  }

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice} />
      </div>
    )
  }
}

export default BurgerBuilder