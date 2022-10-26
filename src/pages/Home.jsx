import React, { Fragment, useState } from "react";
import BlogList from "./BlogList";

function Home() {
  let [blogs, setBlogs] = useState([
    {
      title: "This is a blog 1",
      body: "This is Body 1",
      author: "anis",
      id: 1,
    },
    {
      title: "This is a blog 2",
      body: "This is Body 2",
      author: "anis",
      id: 2,
    },
    {
      title: "This is a blog 3",
      body: "This is Body 3",
      author: "anisujjaman",
      id: 3,
    },
    {
      title: "This is a blog 4",
      body: "This is Body 4",
      author: "anis",
      id: 4,
    },
  ]);
  return (
    <Fragment>
      <div className="home">
        <BlogList blogs={blogs}  title= "All Blog's"/>
        <BlogList blogs={blogs.filter((blog) => blog.author ==="anisujjaman" )} title="Anisujjaman's Blogs"/>
      </div>
    </Fragment>
  );
}

export default Home;