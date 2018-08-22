import React from 'react'
import { Link } from 'react-router-dom'
import statiService from 'service/statistic.js'
import './index.scss'

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userCount: '-',
      productCount: '-',
      orderCount: '-'
    }
  }

  async componentDidMount() {
    let data = await statiService.getHomeCount()
    this.setState(data)
  }

  render() {
    let { userCount, productCount, orderCount } = this.state
    return (
      <div className="page-wrapper">
        <p>用户总数: {userCount}</p>
        <p>商品总数: {productCount}</p>
        <p>订单总数: {orderCount}</p>
      </div>
    )
  }
}