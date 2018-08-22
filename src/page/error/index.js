import React from 'react'
import { Link } from 'react-router-dom'

const Error = (props) => {
  return (
    <div className="page-wrapper">
      <div className="">
        <span>找不到该路径，</span>
        <Link to="/">点我返回首页</Link>
      </div>
    </div>
  )
}

export default Error;