import React, {useEffect} from 'react'
import TimelineEntry from '../components/TimelineEntry'
import { backgroundImageDataAttribute, spacerDataAttribute } from '../custom';

function Experience() {

  useEffect(() => {
    spacerDataAttribute();
  }, [])

  return (
    <section className="shadow-blue white-bg padding">
      <span class="hash-anchor" id="experience"></span>
			<h3 className="section-title">Experience</h3>
			<div className="spacer" data-height="80"></div>
      
			<div className="timeline">
        <TimelineEntry 
          entryFrom="2019" 
          entryTo="Present" 
          title="Academic Degree" 
          description="Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa." 
        />
				
        <TimelineEntry 
          entryFrom="2015" 
          entryTo="2018" 
          title="Bachelor’s Degree" 
          description="Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa." 
        />

        <TimelineEntry 
          entryFrom="2012" 
          entryTo="2015" 
          title="Honours Degree" 
          description="Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa." 
        />
				<span className="timeline-line"></span>
			</div>
		</section>
  )
}

export default Experience
