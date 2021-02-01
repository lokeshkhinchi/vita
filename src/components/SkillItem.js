import React from 'react'

const SkillItem = ({skillName, percentage}) => {
  return (
    <div className="skill-item">
      <div className="skill-info clearfix">
        <h4 className="float-left mb-3 mt-0">{skillName}</h4>
        <span className="float-right">{percentage}%</span>
      </div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={percentage}>
        </div>
      </div>
      <div className="spacer" data-height="50"></div>
    </div>
  )
}

export default SkillItem
