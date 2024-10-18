import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import styles from "./Finiance.module.css";
import { useEffect, useState } from "react";

function Finiance() {
  const [news] = useState([
    {
      title:
        "Hyundai Motor India IPO: GMP falls by over 50% in a week ahead of issue opening",
      description:
        "The Indian unit of South Korean carmaker Hyundai Motor will be selling its shares in the range of ₹1,865-1,960 crore to raise a total of ₹27,856 crore through the IPO.",
      content:
        "NSE\n₹\n₹\nHyundai Motor India Ltd., which will be the country's largest initial public offering (IPO) till date, is set to launch the issue on October 15.The Indian unit of South Korean carmaker Hyundai Motor will be selling its shares in the range of1... [2516 chars]",
      url: "https://www.cnbctv18.com/market/hyundai-motor-india-ipo-gmp-falls-by-over-50-pc-in-a-week-ahead-of-issue-opening-19491209.htm",
      image:
        "https://images.cnbctv18.com/uploads/2024/10/2024-09-24t180208z-1349382542-rc2vw9anmjyx-rtrmadp-3-hyundai-india-ipo-2024-10-d7c49b9fd804992b41cc33825b8d04b6.jpg?im=FitAndFill,width=500,height=300",
      publishedAt: "2024-10-11T05:54:41Z",
      source: {
        name: "CNBCTV18",
        url: "https://www.cnbctv18.com",
      },
    },
  ]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getUTCFullYear();
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  }

  function truncateText(text, len) {
    if (text.length > len) {
      return text.slice(0, len - 3) + "...";
    }
    return text;
  }

  useEffect(() => {
    // Commented out the API call until commonendpoint is properly defined
    // latestFinancialNews();
  }, []);

  return (
    <>
      <SectionHeading title="All latest financial updates" />
      <div className={styles.news}>
        {news.map((article, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.image}>
              <img src={article.image} alt="containt-img" />
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>
                {truncateText(article.title, 100)}
              </div>
              <div className={styles.description}>
                {truncateText(article.description, 150)}
              </div>

              <div className={styles.line}></div>

              <div className={styles.footer}>
                <div className={styles.time}>
                  Published At {formatDate(article.publishedAt)}
                </div>
                <div className={styles.author}>
                  Source: {article.source.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Finiance;
