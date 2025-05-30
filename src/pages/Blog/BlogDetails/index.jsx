import React, { useEffect, useState } from "react";
import { blogs } from "../../../data";
import "./BlogDetails.css";
import Navbar from "../../Navbar/Index";
import Footer from "../../Footer/Index";
import BlogService from "../../../services/blogService";
import { formatDate } from "./../../../utils/myFunctions";
import parse from "html-react-parser";
import { Metadata } from "../../../components/headMetaData";
import useConfigCompanyStore from "../../../store/configCompany.store";

const BlogDetail = () => {
  const { storeCompanyData } = useConfigCompanyStore();

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
    <div id="blogdetail">
      <Metadata
        title={`Blog - ${storeCompanyData?.title_web}`}
        description={storeCompanyData?.descripsi_web}
      />
      <Navbar />
      <div className="container">
        <h1 className="title g-text">Blog Kami</h1>
        <div className="blog_list">
          {listBlog &&
            listBlog.map((blog, index) => (
              <div className="blog_card" key={index}>
                <div className="blog_image">
                  {blog.images && blog.images[0]?.url ? (
                    <img
                      src={apiUrl + blog.images[0].url}
                      alt={blog.name || "blog"}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div>No Image Available</div>
                  )}
                </div>
                <div className="blog_content">
                  <h2 className="blog_title">{blog.name}</h2>
                  <div className="blog_meta">
                    {/* <span className="blog_author">By {blog.poster.name}</span> */}
                    <span className="blog_date">
                      {formatDate(blog.created_at)}
                    </span>
                  </div>
                  <p className="blog_snippet">
                    {parse(blog.description.slice(0, 200))}...
                  </p>
                  {/* <div className="blog_tags">
                  {blog.tags.map((tag, idx) => (
                    <span className="blog_tag" key={idx}>
                      #{tag}
                    </span>
                  ))}
                </div> */}
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
