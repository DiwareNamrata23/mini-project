import React, { useState } from "react";
import "./MyFeed.css"; // Add CSS for styling

const feeds = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ    ", 
    title: "SThis video is from Basics of Stock Market ",
    content: "SThis video is from Basics of Stock Market 1.0",

  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/bLl_VRQ7pBs ", 
    title: "Basics of Stock Market For Beginners Lecture 2",
    content: "This video is from Basics of Stock Market 1.0",
   
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/hBKqk5oYexw ", 
    title: "Basics Of Stock Market for Beginners Lecture 3 ",
    content: "This video is from Basics of Stock Market 1.0 ",

  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/8Qb24s6oWHs", 
    title: "How To Buy Shares In Share Market For Beginners and Types of Orders In Stocks ",
    content: "Don't know how to buy shares in Share Market? Don't know what are the Types of Orders In Stock Market?",

  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/5Hah_jffaHg", 
    title: "What is Short Selling",
    content: "Many newbies in the stock market face this question that How can I sell something which I don't possess? ",

  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/vL2_fjgtP3A", 
    title: "What Is Debentures?",
    content: "Do you know what is debentures?  do you know that #Debentures can pay you better returns than fixed deposits #FD? if not this video is for you!",

  },
  {
    id: 7,
    videoUrl: "https://www.youtube.com/embed/_qw3VuspyS0", 
    title: "What Is Bonus Share With Example ",
    content: "You can get my Stock Market courses on https://www.rachanaranade.com ",
   
  },
  {
    id: 8,
    videoUrl: "https://www.youtube.com/embed/OeH-Ti1oj_I", 
    title: "Basics Of Stock Market | Power Of Attorney",
    content: "Open Free Demat and Trading Account with Upstox: http://upstox.com/open-account/?f=1WJM",

  },
  {
    id: 9,
    videoUrl: "https://www.youtube.com/embed/zQZOThvodTM", 
    title: "Preparing Maggie vs Opening a demat account ",
    content: "In this video, you will learn How to open a Demat Account with Zerodha. ",
  
  },
  {
    id: 10,
    videoUrl: "https://www.youtube.com/embed/4srs4YjF8wE", 
    title: "How to Start Investing in your 20s",
    content: "In this video, we discuss how one can invest with low capital in his/her 20s",
   
  },
  {
    id: 11,
    videoUrl: "https://www.youtube.com/embed/SjJ8xYRcRaw", 
    title: "What Is Grandfathering Concept In Long Term Capital Gains Tax",
    content: "Learn what is Grandfathering concept and how does it affect the tax on long term capital gains.",

  },
  {
    id: 12,
    videoUrl: "https://www.youtube.com/embed/9hzCxthQN2A", 
    title: "Tax On Bonus Shares With Example , LTCG Tax, STCG Tax on Bonus Shares Explained Part 2",
    content: "You can get my Stock Market courses on https://www.rachanaranade.com",

  },
  {
    id: 13,
    videoUrl: "https://www.youtube.com/embed/loFW13pYpqk", 
    title: "What Is Pledging Of Shares?",
    content: "Learn what is #pledging of shares? and why it is important to watch this before you #invest in #shares.",
  
  },
  {
    id: 14,
    videoUrl: "https://www.youtube.com/embed/IKZ9b7nwIZo", 
    title: "What is Helicopter Money? 🚁💸 Can India have Helicopter Money",
    content: " Learn what is #HelicopterMoney? Is the concept of Helicopter money viable in #India?",

  },
  {
    id: 15,
    videoUrl: "https://www.youtube.com/embed/nfGnFengbPY", 
    title: "How to Gift Stocks?",
    content: "In this video, I show you how can you gift stocks to your loved ones by using Zerodha. ",

  },
  {
    id: 16,
    videoUrl: "https://www.youtube.com/embed/k8J4fJIYrCI", // Replace with your video link
    title: " Careers in Stock Market",
    content: "Find the right career options with specializations in finance",
  
  },
  {
    id: 17,
    videoUrl: "https://www.youtube.com/embed/h6OYZHa-ku8", // Replace with your video link
    title: "Why People lose money in Stock Market?",
    content: "In this video, we look at the top 3 mistakes one should avoid in the field of the stock market.",

  },
  {
    id: 18,
    videoUrl: "https://www.youtube.com/embed/h6OYZHa-ku8", // Replace with your video link
    title: "How to Pledge Shares?",
    content: "In this video, you will learn what does pledging of shares means and how to make optimum utilization of your capital with the help of Pledging.",
   
  },
  {
    id: 19,
    videoUrl: "https://www.youtube.com/embed/4UCa16b34u0", // Replace with your video link
    title: "Simplify Budget Concept",
    content: "In this video, I try and make some complex terms about Budget.",
  
  },
  {
    id: 20,
    videoUrl: "https://www.youtube.com/embed/U0a0JErlA5U", // Replace with your video link
    title: "How to add Nominee to your Demat account",
    content: "This is a very important video for all of you. Life is certainly uncertain.",
  
  },
  
  // Add other feeds similarly with video URLs
];

const MyFeed = () => {
  const [feedItems, setFeedItems] = useState(feeds);
  const [query, setQuery] = useState("");

  return (
    <div className="feed-container">
      <h2 className="feed-title">Learnings</h2>
      <div className="feed-list">
        {feedItems.map((item) => (
          <div className="feed-item" key={item.id}>
            <iframe
              width="560"
              height="315"
              src={item.videoUrl}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            {/* <span className="feed-date">{item.date}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeed;
