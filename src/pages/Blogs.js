import React, {useEffect} from 'react'
import BlogItemThumb from '../components/BlogItemThumb';
import { backgroundImageDataAttribute, spacerDataAttribute } from '../custom';

function Blogs() {

  useEffect(() => {
    spacerDataAttribute();
  }, [])

  return (
    <section className="shadow-blue white-bg padding">
      <span class="hash-anchor" id="blog"></span>
			<h3 className="section-title">Recent posts</h3>
			<div className="spacer" data-height="80"></div>

			<div className="row">
				
				<div className="col-md-4">
					<BlogItemThumb 
						category="Tech" 
						image="image" 
						title="How To Become Better With UI Design" 
						date="13 March, 2019" 
						author="Bako Doe" 
					/>
				</div>

				<div className="col-md-4">
					<BlogItemThumb 
						category="Tech" 
						image="image" 
						title="How To Become Better With UI Design" 
						date="13 March, 2019" 
						author="Bako Doe" 
					/>
				</div>

				<div className="col-md-4">
					<BlogItemThumb 
						category="Tech" 
						image="image" 
						title="How To Become Better With UI Design" 
						date="13 March, 2019" 
						author="Bako Doe" 
					/>
				</div>

			</div>

		</section>
  )
}

export default Blogs
