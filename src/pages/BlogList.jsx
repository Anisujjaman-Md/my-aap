import React from "react";
import {Link} from 'react-router-dom'
function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      <h1> {title} </h1>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.id} : {blog.title}</h2>
          </Link>
          {/* <h5>Written By:{blog.body}</h5> */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
