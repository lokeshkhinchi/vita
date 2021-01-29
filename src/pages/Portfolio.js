import React, {useEffect, useState} from 'react'
import { spacerDataAttribute } from '../custom';
import Slider from "react-slick";
import WorkItem from '../components/WorkItem';

function Portfolio() {

  useEffect(() => {
    spacerDataAttribute();
  }, [])

  return (
    <>
    <section className="shadow-blue white-bg padding">
      <span class="hash-anchor" id="portfolio"></span>
			<h3 className="section-title">Portfolio</h3>
			<div className="spacer" data-height="30"></div>
      
			{/* <ul className="portfolio-filter list-inline">
				<li className="current list-inline-item" data-filter="*">All Projects</li>
				<li className="list-inline-item" data-filter=".branding">Branding</li>
				<li className="list-inline-item" data-filter=".creative">Creative</li>
				<li className="list-inline-item" data-filter=".design">Design</li>
				<li className="list-inline-item" data-filter=".video">Video</li>
			</ul> */}
      
			{/* <div className="pf-filter-wrapper mb-4">
				<select className="portfolio-filter-mobile">
					<option value="*">Everything</option>
					<option value=".creative">Creative</option>
					<option value=".video">Video</option>
					<option value=".design">Design</option>
					<option value=".branding">Branding</option>
				</select>
			</div> */}
      
			<div className="row portfolio-wrapper">
        <WorkItem tags="Art, Creative" title="Creative Art" image="image" />
        <WorkItem tags="Art, Creative" title="Creative Art" image="image" />
        <WorkItem tags="Art, Creative" title="Creative Art" image="image" />
        <WorkItem tags="Art, Creative" title="Creative Art" image="image" />
        <WorkItem tags="Art, Creative" title="Creative Art" image="image" />
        <WorkItem tags="Art, Creative" title="Creative Art" image="image" />

			</div>
      
			{/* <div className="load-more text-center mt-4">
				<a href="javascript:" className="btn btn-default"><i className="fas fa-circle-notch"></i> Load more</a>
        
				<ul className="portfolio-pagination list-inline d-none">
					<li className="list-inline-item">1</li>
					<li className="list-inline-item"><a href="works-2.html">2</a></li>
				</ul>
			</div> */}
		</section>
    
		
    </>
  )
}

export default Portfolio
