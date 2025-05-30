import React, { useEffect, useState } from "react";
import "./Blog.css";
import { blogs } from "../../data";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogService from "../../services/blogService";
import { formatDate } from "./../../utils/myFunctions"

const Blog = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const blogService = BlogService();
  const [listBlog, setListBlog] = useState();

  const getBlog = async () => {
    try {
      const response = await blogService.getAllBlog();
      setListBlog(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <section id="blog">
      <div className="container">
        <h1 className="title">
          Blog
          <span className="g-text"> Kami</span>
        </h1>
        <h3 className="sub_title">Explorasi blog kami</h3>
        <div className="blogs_container">
          {listBlog &&
            listBlog.map((blog, index) => (
              <div className="blog_card" key={index}>
                <p className="category">{blog.categori}</p>
                <div className="picture">
                  {blog.images && blog.images[0]?.url ? (
                    <img
                      src={apiUrl + blog.images[0].url}
                      alt={blog.name || "blog"}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div>No Image Available</div>
                  )}
                </div>
                <div className="details">
                  <h3>{blog.name}</h3>
                  <div className="buttons_container">
                    <button className="btn">
                      <BsCalendar2Date />
                      {formatDate(blog.created_at)}
                    </button>
                    {/* <button className="btn">
                    <MdOutlineThumbUpOffAlt />
                    {blog.likeCount}
                  </button>
                  <button className="btn">
                    <FaRegCommentDots />
                    {blog.commentCount}
                  </button> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="button_center_blog">
        <Link to="/blog-kami">
          <button className="btn btn_primary btn_primary:hover btn_service">
            Lihat Blog kami
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
