import React from 'react'

const TestimonialItem = ({testimonial, image, name, designation}) => {
  return (
    <div className="testimonial-item">
      <span className="symbol"><i className="fas fa-quote-left"></i></span>
      <p>{testimonial}</p>
      <div className="testimonial-details">
        <div className="thumb">
          <img src={image} alt="customer-name" />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem
