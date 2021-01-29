import React from 'react'

const FactItem = ({icon, count, title}) => {
  return (
    <div className="fact-item text-center">
      <i className={`${icon} icon-circle`}></i>
      <h2 className="count">{count}</h2>
      <span>{title}</span>
    </div>
  )
}

export default FactItem
