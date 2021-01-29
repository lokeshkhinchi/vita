import React from 'react'
import TestimonialItem from '../components/TestimonialItem'
import Slider from 'react-slick';
import { spacerDataAttribute, testimonialsSettings, clientsSettings } from '../custom';

const Testimonials = () => {
  return (
    <section id="testimonials" className="shadow-blue white-bg padding">
			<h3 className="section-title">Testimonials</h3>
			<div className="spacer" data-height="97"></div>

      <Slider {...testimonialsSettings} className="testimonials-wrapper">
        <TestimonialItem testimonial="test" name="name" designation="designation" image="image" />
        <TestimonialItem testimonial="test" name="name" designation="designation" image="image" />
        <TestimonialItem testimonial="test" name="name" designation="designation" image="image" />
      </Slider>

		</section>
  )
}

export default Testimonials
