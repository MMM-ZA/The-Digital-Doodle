import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";

import classes from  "../styling/Blogs.module.css";
require('dotenv').config();

const Blogs = () => {
  const API_KEY = process.env.API_KEY
  const searchInput = useSelector(selectUserInput);
 const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=${API_KEY}`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput, blog_url, dispatch]);

  return (
    <div className={classes.blog__page}>
      <h1 className={classes.blog__page__header}>Blogs</h1>
      {loading ? <h1 className={classes.loading}>Loading...</h1> : ""}
      <div className={classes.blogs}>
        {blogs?.articles?.map((blog) => (
        <a className={classes.blog} target="_blank" rel="noopener noreferrer" href={blog.url}>
            <img src={blog.image} alt="" />
            <div>
              <h3 className={classes.sourceName}>
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

        {blogs?.totalArticles === 0 && (
          <h1 className={classes.no__blogs}>
            No blogs available.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
