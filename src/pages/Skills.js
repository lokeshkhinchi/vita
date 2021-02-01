import React from 'react'
import SkillItem from '../components/SkillItem';

const Skills = () => {
  return (
    <section id="skills" className="shadow-blue white-bg padding">
      <h3 className="section-title">My skills</h3>
      <div className="spacer" data-height="80"></div>

      <p className="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>

      <div className="row mt-5">

        <div className="col-md-6">
          <SkillItem skillName="WordPress" percentage="20" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="HTML & CSS" percentage="30" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="jQuery" percentage="24" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Sketch" percentage="54" />
        </div>

      </div>
    </section>
  )
}

export default Skills
