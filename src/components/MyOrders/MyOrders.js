import React, { Component } from 'react'
import { Table, Tag } from 'antd';
import axios from 'axios'

import classes from './MyOrders.module.css'

class Authentication extends Component {

  state = {
    orders: []
  }

  componentDidMount = () => {

    axios.get('http://51.75.20.206:3100/orders')
      .then((response) => {
        console.log(response);

        this.setState({
          orders: response.data.orders
        })

      })
      .catch((error) => {
        console.log(error)
      })

  }

  render() {

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id
      },
      {
        title: 'Date',
        dataIndex: 'date'
      },
      {
        title: 'Salad',
        dataIndex: 'salad',
        sorter: (a, b) => a.salad - b.salad
      },
      {
        title: 'Cheese',
        dataIndex: 'cheese',
        sorter: (a, b) => a.cheese - b.cheese
      },
      {
        title: 'Meat',
        dataIndex: 'meat',
        sorter: (a, b) => a.meat - b.meat
      },
      {
        title: 'Escalope',
        dataIndex: 'escalope',
        sorter: (a, b) => a.escalope - b.escalope
      },
      {
        title: 'Total Price (DT)',
        dataIndex: 'totalPrice',
        sorter: (a, b) => a.totalPrice - b.totalPrice
      },
      {
        title: 'Delivered',
        dataIndex: 'delivered',
        render: (delivered) => {
          if (delivered)
            return <Tag color='green'>Yes</Tag>
          else
            return <Tag color='volcano'>No</Tag>
        }
      },
    ];

    const data = this.state.orders.map(order => {
      return {
        ...order,
        key: order.id,
        date: new Date(order.date).toDateString()
      }
    })

    // [
    //   {
    //     id: '1',
    //     date: 'John Brown',
    //     salad: 1,
    //     cheese: 2,
    //     meat: 1,
    //     escalope: 0,
    //     totalPrice: '21.3 DT',
    //     delivered: 'true',
    //     key: '1'
    //   }
    // ];

    return (
      <div className={classes.OrdersTable}>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default Authentication