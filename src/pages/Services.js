import React, {useEffect} from 'react'
import ServiceItem from '../components/ServiceItem';
import { backgroundImageDataAttribute, spacerDataAttribute } from '../custom';


function Services() {

  useEffect(() => {
    spacerDataAttribute();
  }, [])

  return (
    <section className="shadow-blue white-bg padding">
      <span class="hash-anchor" id="services"></span>

			<h3 className="section-title">Services</h3>
			<div className="spacer" data-height="80"></div>

			<div className="row">

				<div className="col-md-4 col-sm-6">
          <ServiceItem 
            icon="icon-globe" 
            serviceName="Development" 
            description="Lorem ipsum dolor sit amet consectetuer elit." 
          />
					<div className="spacer" data-height="20"></div>
				</div>

				<div className="col-md-4 col-sm-6">
          <ServiceItem 
            icon="icon-chemistry" 
            serviceName="Design" 
            description="Lorem ipsum dolor sit amet consectetuer elit." 
          />
					<div className="spacer" data-height="20"></div>
				</div>

				<div className="col-md-4 col-sm-6">
          <ServiceItem 
            icon="icon-directions" 
            serviceName="Advertising" 
            description="Lorem ipsum dolor sit amet consectetuer elit." 
          />
					<div className="spacer" data-height="20"></div>
				</div>

				<div className="col-md-4 col-sm-6">
          <ServiceItem 
            icon="icon-rocket" 
            serviceName="SEO" 
            description="Lorem ipsum dolor sit amet consectetuer elit." 
          />
					<div className="spacer d-md-none d-lg-none" data-height="20"></div>
				</div>

				<div className="col-md-4 col-sm-6">
          <ServiceItem 
            icon="icon-note" 
            serviceName="Copy Write"
            description="Lorem ipsum dolor sit amet consectetuer elit." 
          />
					<div className="spacer d-md-none d-lg-none" data-height="20"></div>
				</div>

				<div className="col-md-4 col-sm-6">
          <ServiceItem 
            icon="icon-bubbles" 
            serviceName="Support" 
            description="Lorem ipsum dolor sit amet consectetuer elit." 
          />
				</div>

			</div>
		</section>
  )
}

export default Services
