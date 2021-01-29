import React from 'react'

const ClientItem = ({image, name}) => {
  return (
    <div className="client-item">
      <div className="inner">
        <img src={image} alt={name} />
      </div>
    </div>
  )
}

export default ClientItem
