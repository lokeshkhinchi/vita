import React from 'react'

function BlogItemThumb({category, image, title, date, author}) {
  return (
    <div className="blog-item">
      <div className="thumb">
        <a href="#">
          <span className="category">{category}</span>
        </a>
        <a href="#">
          <img src={image} alt="blog-title" />
        </a>
      </div>
      <h4 className="mt-4 mb-0"><a href="#">{title}</a></h4>
      <ul className="list-inline meta mb-0 mt-3">
        <li className="list-inline-item">{date}</li>
        <li className="list-inline-item">{author}</li>
      </ul>
    </div>
  )
}

export default BlogItemThumb
