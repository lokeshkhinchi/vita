import React, {useEffect} from 'react'
import { backgroundImageDataAttribute, spacerDataAttribute } from '../custom';

function Contact() {

  useEffect(() => {
    spacerDataAttribute();
  }, [])

  return (
		<section className="shadow-blue white-bg padding">
      <span class="hash-anchor" id="contact"></span>
			<h3 className="section-title">Get in touch</h3>
			<div className="spacer" data-height="80"></div>

			<div className="row">
				
				<div className="col-md-4 mb-4 mb-md-0">
          
					<div className="contact-info mb-5">
						<i className="icon-phone"></i>
						<div className="details">
							<h5>Phone</h5>
							<span>+44 1632 960428</span>
						</div>
					</div>
					<div className="contact-info mb-5">
						<i className="icon-envelope"></i>
						<div className="details">
							<h5>Email address</h5>
							<span>hello@bako.com</span>
						</div>
					</div>
					<div className="contact-info">
						<i className="icon-location-pin"></i>
						<div className="details">
							<h5>Location</h5>
							<span>West Palm Beach, 4669 Travis Street</span>
						</div>
					</div>
				</div>

				<div className="col-md-8">
          
					<form id="contact-form" className="contact-form" method="post" action="form/contact.php">
						
						<div className="messages"></div>
						
						<div className="row">
							<div className="column col-md-6">
                
								<div className="form-group">
									<input type="text" className="form-control" name="InputName" id="InputName" placeholder="Your name" required="required" data-error="Name is required." />
									<div className="help-block with-errors"></div>
								</div>
							</div>
							
							<div className="column col-md-6">
                
								<div className="form-group">
									<input type="email" className="form-control" id="InputEmail" name="InputEmail" placeholder="Email address" required="required" data-error="Email is required." />
									<div className="help-block with-errors"></div>
								</div>
							</div>

							<div className="column col-md-12">
                
								<div className="form-group">
									<input type="text" className="form-control" id="InputSubject" name="InputSubject" placeholder="Subject" required="required" data-error="Subject is required." />
									<div className="help-block with-errors"></div>
								</div>
							</div>
					
							<div className="column col-md-12">
                
								<div className="form-group">
									<textarea name="InputMessage" id="InputMessage" className="form-control" rows="5" placeholder="Message" required="required" data-error="Message is required."></textarea>
									<div className="help-block with-errors"></div>
								</div>
							</div>
						</div>

						<button type="submit" name="submit" id="submit" value="Submit" className="btn btn-default"><i className="icon-paper-plane"></i>Send Message</button>

					</form>
          
				</div>

			</div>

		</section>
  )
}

export default Contact
