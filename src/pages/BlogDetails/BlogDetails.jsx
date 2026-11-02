
import React from "react";
import "./BlogDetails.css";

import doc1 from "../../assets/doc1.jpg";
import doc2 from "../../assets/doc2.jpg";
import doc3 from "../../assets/doc3.jpg";
import Banner from "../../components/Banner/Banner";
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter } from "react-icons/fa";

const recentPosts = [
  {
    image: doc1,
    title: "Precious Tips To Help You Get Better.",
    date: "21 July 2021",
  },
  {
    image: doc2,
    title: "Ten Doubts You Should Clarify About.",
    date: "20 July 2021",
  },
  {
    image: doc3,
    title: "The 10 Steps Needed For Putting.",
    date: "19 July 2021",
  },
];

const comments = [
  {
    name: "George",
    image: doc3,
    date: "MAY 09, 2021 AT 10:45 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    name: "Falikaz",
    image: doc2,
    date: "MAY 09, 2021 AT 10:45 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    reply: true,
  },
  {
    name: "Sonar",
    image: doc3,
    date: "MAY 09, 2021 AT 10:45 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    name: "Michel",
    image: doc2,
    date: "MAY 09, 2021 AT 10:45 AM",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    name: "Ahmed",
    image: doc1,
    date: "MAY 10, 2021 AT 09:30 AM",
    text: "Thank you for sharing this useful information. This article helped me understand the topic much better.",
  },

];

const tags = [
  "Improvement",
  "Health",
  "Life",
  "Covid",
  "Healthy",
  "Growth",
  "Education",
  "Manage",
  "General",
];

export default function BlogDetails() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    
      <Banner title='Blog Details' smtitle='Blog Details' />
    <section className="blog-details">
      <div className="blog-container">
        {/* Main Article */}
        <main className="blog-article">
          <img
            src={doc1}
            alt="Doctor with a family"
            className="blog-main-image"
          />

          <div className="blog-meta">
            <span>
              <i className="bi bi-person-circle"></i>
              Sonar Moyna
            </span>

            <span>
              <i className="bi bi-calendar3"></i>
              19 July 2021
            </span>
          </div>

          <h1>Precious Tips To Help You Get Better.</h1>

          <p className="blog-description">
            You just need to enter the keyword and select the keyword type
            to generate a list of 6 title ideas and suggestions. If you’re
            not satisfied with the results, you can always hit the refresh
            button to generate a new list of unique titles.
          </p>

          {/* Quote */}
          <blockquote className="blog-quote">
            <span className="quote-mark">“</span>
            <p>
              Once you’ve gotten all the titles and have chosen the best
              one, the next thing you need to do is to craft a magnetic
              headline.
            </p>
          </blockquote>

          {/* Two Images */}
          <div className="blog-images">
            <img src={doc2} alt="Doctor portrait" />
            <img src={doc3} alt="Medical consultation" />
          </div>

          {/* Article Text */}
          <p className="blog-description">
            You just need to enter the keyword and select the keyword type
            to generate a list of 6 title ideas and suggestions. If you’re
            not satisfied with the results, you can always hit the refresh
            button to generate a new list of unique titles.
          </p>

          <p className="blog-description second-paragraph">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>

          {/* Tags and Share */}
          <div className="blog-tags-share">
            <div className="blog-tags">
              <strong>Tags:</strong>
              <a href="#health">Health</a>
              <a href="#growth">Growth</a>
              <a href="#life">Life</a>
            </div>

            <div className="blog-share">
              <strong>Share:</strong>

              <a href="https://www.facebook.com/" aria-label="Facebook">
                <FaFacebook />
              </a>

              <a href="https://www.instagram.com/" aria-label="Instagram">
              <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
               <FaLinkedin />
              </a>

              <a href="https://x.com/" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Author Card */}
          <div className="blog-author-card">
            <img src={doc2} alt="Sonar Z. Moyna" />

            <div className="author-content">
              <h3>Sonar Z. Moyna</h3>

              <p>
                Aenean sollicitudin, lorem quis biber idum auctor anisi
                elit consequat happ quam vel enim augue.
              </p>

              <div className="blog-share author-social">
                <a href="https://www.facebook.com/" aria-label="Facebook">
                  <FaFacebook />
                </a>

                <a href="https://www.instagram.com/" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                 <FaLinkedin />
                </a>

                <a href="https://x.com/" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Comments */}
          <section className="comments-section">
            <h2>8 Comments</h2>
            <div className="title-decoration"></div>

            {comments.map((comment, index) => (
                <div
                className={`comment-card ${
                    comment.reply ? "comment-reply" : ""
                }`}
                key={index}
                >
                <div className="comment-header">
                  <img src={comment.image} alt={comment.name} />

                  <div>
                    <h3>{comment.name}</h3>
                    <span>{comment.date}</span>
                  </div>
                </div>

                <p>{comment.text}</p>

                <button
                  type="button"
                  className="reply-button"
                  onClick={() => {
                      document
                      .getElementById("reply-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    >
                  REPLY
                </button>
              </div>
            ))}
          </section>

          {/* Leave a Reply */}
          <section className="leave-reply" id="reply-form">
            <h2>Leave a Reply</h2>
            <div className="title-decoration"></div>

            <form onSubmit={handleSubmit}>
              <div className="reply-inputs">
                <input
                  type="text"
                  placeholder="Author"
                  aria-label="Author"
                  required
                  />

                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  required
                  />
              </div>

              <textarea
                placeholder="Comment"
                aria-label="Comment"
                rows="5"
                required
                ></textarea>

              <button type="submit" className="submit-comment">
                Submit
              </button>
            </form>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Search */}
          <form
            className="blog-search"
            onSubmit={(e) => e.preventDefault()}
            >
            <input
              type="text"
              placeholder="Enter your keywords..."
              aria-label="Search keywords"
              />

            <button type="submit" aria-label="Search">
              <FaSearch />
            </button>
          </form>

          {/* Recent Posts */}
          <div className="sidebar-card recent-posts">
            <h2>Recent Posts</h2>
            <div className="title-decoration"></div>

            {recentPosts.map((post, index) => (
                <div className="recent-post" key={index}>
                <img src={post.image} alt="" />

                <div className="recent-post-info">
                  <h3>{post.title}</h3>

                  <span>
                    <i className="bi bi-calendar3"></i>
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="sidebar-card gallery-card">
            <h2>Our Gallery</h2>
            <div className="title-decoration"></div>

            <div className="blog-gallery">
              {[
                  doc1,
                  doc2,
                  doc3,
                  doc3,
                  doc2,
                  doc1,
                ].map((image, index) => (
                    <img src={image} alt="" key={index} />
                ))}
            </div>
          </div>

          {/* Tags */}
          <div className="sidebar-card sidebar-tags">
            <h2>Tags</h2>
            <div className="title-decoration"></div>

            <div className="sidebar-tag-list">
              {tags.map((tag) => (
                  <a href={`#${tag.toLowerCase()}`} key={tag}>
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
              </>
  );
}
