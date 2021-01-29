import React from 'react'

const WorkItem = ({tags, title, image}) => {
  return (
    <div className={`col-md-4 col-sm-6 grid-item ${tags}`}>
      <a href="work-single.html">
        <div className="portfolio-item">
          <div className="details">
            <h4 className="title">{title}</h4>
            <span className="term">{tags}</span>
          </div>
          <span className="plus-icon">+</span>
          <div className="thumb">
            <img src={image} alt="Portfolio-title" />
            <div className="mask"></div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default WorkItem
