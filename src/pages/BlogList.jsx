import React from 'react'

function BlogList({blogs, title}) {
    // const blogs = props.blogs
    // console.log(props,blogs)
  return (
    <div className="blog-list">
      <h1> {title} </h1>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <h5>Written By:{blog.author}</h5>
          </div>
        ))}
    </div>
  )
}

export default BlogList