
import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";

const news = [
  {
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600",
    authorImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80",
    author: "John deo",
    date: "21 July 2021",
    title: "In this hospital there are special surgeon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600",
    authorImage:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80",
    author: "Peter Packer",
    date: "20 July 2021",
    title: "Can you get a diflucan prescription online?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600",
    authorImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80",
    author: "Sonar Moyna",
    date: "19 July 2021",
    title: "Why Is Skin Surgeon Considered Underrated",
  },
];

export default function LatestNews() {
  return (
    <section className="latest-news">
      <div className="news-decoration news-triangle"></div>
      <div className="news-decoration news-circle"></div>
      <div className="news-decoration news-square"></div>
      <div className="news-decoration news-zigzag"></div>

      <div className="container">
     

        <div className="row justify-content-center">
          {news.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.title}>
              <article className={`news-card news-card-${index + 1}`}>
                <img
                  className="news-main-image"
                  src={item.image}
                  alt={item.title}
                />

                <div className="news-card-body">
                  <div className="news-meta">
                    <div className="news-author">
                      <img src={item.authorImage} alt={item.author} />
                      <span>{item.author}</span>
                    </div>

                    <div className="news-date">
                      <span className="calendar-icon">▦</span>
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <Link to='/blogDetails' className="news-read-more">
                    <span>Read More</span>
                    <span className="news-arrow">›</span>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}