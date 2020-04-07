import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import Modal from './Modal/Modal'
import OrderSummary from './OrderSummary/OrderSummary'
import axios from 'axios'
import loadingGif from '../../assets/images/loading.gif'

class BurgerBuilder extends Component {

  constructor(props) {
    console.log('[BurgerBuilder.js] constructor');

    super(props)
    this.state = {
      ingredients: [],
      totalPrice: 4,
      showModal: true,
      isLoading: true,
      errorMessage: ''
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

  sendOrderHandler = () => {
    this.setState({
      isLoading: true
    })

    axios.post('https://api.magicburger.ditraacademy.com/burger', {
      burger: this.state.ingredients
    })
      .then((response) => {
        console.log(response);

        this.setState({
          showModal: false,
          isLoading: false
        })

      })
      .catch((error) => {
        console.log(error);

        this.setState({
          errorMessage: 'Somthing went wrong: ' + error.message
        })
      })
  }

  componentDidMount = () => {
    console.log('[BurgerBuilder.js] componentDidMount');

    // let x = 5;

    axios.get('https://api.magicburger.ditraacademy.com/ingredients')
      .then((response) => {
        console.log(response);
        this.setState({
          ingredients: response.data.ingredients,
          showModal: false,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMessage: 'Somthing went wrong: ' + error.message
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

    let modalContent = null

    if (this.state.isLoading) {
      modalContent = (
        <div>
          <div style={{ display: 'flex' }}>
            <h3 style={{ width: '80%' }}>Fetching data from the server ..</h3>
            <img
              style={{ width: '60px', height: '60px' }}
              src={loadingGif} alt='laoding' />
          </div>
          <div>{this.state.errorMessage}</div>
        </div>
      )
    } else {
      modalContent = (
        <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          showOrHideModal={this.showOrHideModalHandler}
          sendOrder={this.sendOrderHandler}
        />
      )
    }

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
          {modalContent}
        </Modal>
      </div>
    )
  }
}

export default BurgerBuilder