import React from 'react'

const TimelineEntry = ({entryFrom, entryTo, title, description}) => {
  return (
    <div className="entry">
      <div className="title">
        <span>{entryFrom} - {entryTo}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default TimelineEntry
