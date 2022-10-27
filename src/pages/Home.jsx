import React, { Fragment, useState, useEffect } from "react";
import { getBlogs } from "../fetch/blogFetch";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);
  
  const getData = async () => {
    let res = await getBlogs();
    if (res) setBlogs(res);
  };

  useEffect(() => {
    getData();

  }, []);

  return (
    <Fragment>
      <div className="home">
        <div>
          {blogs ? (
            <BlogList blogs={blogs} title="All Blog's" />
          ) : (
            <div>Loading .....</div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
