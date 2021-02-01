import React from 'react'
import FactItem from '../components/FactItem';

const Facts = () => {
  return (
    <section id="facts" className="shadow-dark color-white background parallax padding-50" data-image-src="images/background-1.jpg">

      <div className="row relative z-1">
        <div className="col-md-3 col-sm-6">
          <FactItem icon="icon-like" count="157" title="Projects completed" />
        </div>
        <div className="col-md-3 col-sm-6">
          <FactItem icon="icon-cup" count="2765" title="Cup of coffee" />
        </div>
        <div className="col-md-3 col-sm-6">
          <FactItem icon="icon-emotsmile" count="350" title="Happy customers" />
        </div>
        <div className="col-md-3 col-sm-6">
          <FactItem icon="icon-trophy" count="29" title="Awards won" />
        </div>
      </div>

      <div className="overlay"></div>
    </section>
  )
}

export default Facts
