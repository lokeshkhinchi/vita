import React, {useEffect} from 'react';
import about from '../images/about.png';
import { backgroundImageDataAttribute, spacerDataAttribute, progressWaypoint } from '../custom';

function About() {

  useEffect(() => {
    spacerDataAttribute();
    progressWaypoint();
  }, [])

  return (
    <>
    <section className="shadow-blue white-bg padding">
      <span class="hash-anchor" id="about"></span>
			<h3 className="section-title">About Me</h3>
			<div className="spacer" data-height="80"></div>

			<div className="row">
				<div className="col-md-3">
					<img src={about} alt="about" />
				</div>
				<div className="col-md-9">
					<h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
					<p className="mb-0">I am Bako Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.</p>
					<div className="row my-4">
						<div className="col-md-6">
							<p className="mb-2">Name: <span className="text-dark">Bako Doe</span></p>
							<p className="mb-0">Birthday: <span className="text-dark">14 August, 1990</span></p>
						</div>
						<div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
							<p className="mb-2">Location: <span className="text-dark">London, UK</span></p>
							<p className="mb-0">Email: <span className="text-dark">hello@bako.com</span></p>
						</div>
					</div>
					<a href="#" className="btn btn-default mr-3"><i className="icon-cloud-download"></i>Download CV</a>
					<a href="#" className="btn btn-alt mt-2 mt-md-0 mt-xs-2"><i className="icon-envelope"></i>Hire me</a>
				</div>
			</div>
		</section>
    </>
  )
}

export default About
