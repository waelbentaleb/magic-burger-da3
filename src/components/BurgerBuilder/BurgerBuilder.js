import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import Modal from './Modal/Modal'
import OrderSummary from './OrderSummary/OrderSummary'
import axios from 'axios'

class BurgerBuilder extends Component {

  constructor(props) {
    console.log('[BurgerBuilder.js] constructor');

    super(props)
    this.state = {
      ingredients: [],
      totalPrice: 4,
      showModal: false
    }
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

  showOrHideModalHandler = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  componentDidMount = () => {
    console.log('[BurgerBuilder.js] componentDidMount');

    axios.get('http://51.75.20.206:3100/ingredients').then((response) => {
      console.log(response);
      this.setState({
        ingredients: response.data.ingredients
      })
    })


  }

  shouldComponentUpdate = (nextProp, nextState) => {
    console.log('[BurgerBuilder.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate = () => {
    console.log('[BurgerBuilder.js] componentDidUpdate')
  }

  render() {
    console.log('[BurgerBuilder.js] render');

    return (
      <div>
        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          showOrHideModal={this.showOrHideModalHandler}
        />

        <Modal
          shouldShow={this.state.showModal}
          showOrHideModal={this.showOrHideModalHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            showOrHideModal={this.showOrHideModalHandler}
          />
        </Modal>
      </div>
    )
  }
}

export default BurgerBuilder