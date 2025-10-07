import React from "react";

const BlogSection = () => (
  <section className="blog-section">
    <div className="contain">
      <div className="section-header">
        <h2>Latest from Our Blog</h2>
        <p>Insights, tips, and guides to help you find the right property.</p>
      </div>

      <div className="blog-posts">
        <div className="blog-post">
          <img src="./assets/img_4.jpg.webp" alt="blog1" />
          <div className="post-content">
            <span className="post-date">OCT 2025</span>
            <h3><a href="#">Real Estate Trends 2025</a></h3>
            <p>Learn what’s shaping the future of real estate this year.</p>
          </div>
        </div>
        <div className="blog-post">
          <img src="./assets/img_5.jpg.webp" alt="blog2" />
          <div className="post-content">
            <span className="post-date">SEP 2025</span>
            <h3><a href="#">How to Buy Property Smartly</a></h3>
            <p>Tips for first-time home buyers and investors in Pakistan.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
