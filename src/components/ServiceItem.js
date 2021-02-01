import React from 'react'

const ServiceItem = ({icon, serviceName, description}) => {
  return (
    <div className="service-item text-center">
      <i className={`icon-simple ${icon}`}></i>
      <h4 className="my-3">{serviceName}</h4>
      <p className="mb-0">{description}</p>
    </div>
  )
}

export default ServiceItem
