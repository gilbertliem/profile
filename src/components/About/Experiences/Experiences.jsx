import React from "react";
import styles from "./Experiences.module.css";

const portfolio = [
  {
    id: 1,
    project: "miniproject",
    website: "https://production-teamg.herokuapp.com/",
    source: "https://github.com/gilbertliem/miniproject",
    role: "frontend developer",
    detail: `A website to search for movie details, including movie list, synopsis, review and genre.`,
  },
  {
    id: 2,
    project: "ferchael",
    website: "https://ferchael.herokuapp.com/",
    source: "https://gitlab.com/gilbertliem/ferchael",
    role: "frontend developer",
    detail: `A company profile website, with project portfolio, request form for inquiry, and also linked to social media.`,
  },
  {
    id: 3,
    project: "talikasih",
    website: "https://production-react-talikasih.herokuapp.com/",
    source: "https://github.com/samudraarq/talikasih",
    role: "frontend developer",
    detail: `A platform for campaign and donation activity. The website itself provides features such as login-logout, create campaign form, donate form, sort type of campaign, search bar, etc.`,
  },
  // {
  //   id: 4,
  //   project: "",
  //   website: "",
  //   source: "",
  //   role: "",
  //   detail: ``,
  // },
];

const experiences = [
  {
    id: 1,
    company: "discover the world",
    country: "indonesia",
    city: "jakarta",
    position: "sales executive",
    period: "August 2019 - July 2020",
    description: [
      `Find new prospect client and manage the current clients in East Java area. Responsible to do brand awareness to all clients and maintain good relationship with partners and clients`,
      `Make sales plan and strategy to find new leads. Regularly do market analyst and make market analyst report for the usage of sales plan and strategy`,
    ],
  },
  {
    id: 2,
    company: "the st. regis bali resort",
    country: "indonesia",
    city: "bali",
    position: "trainee f&b attendant",
    period: "June 2018 - December 2018",
    description: [`Customer Service`, `Food and Beverage Quality Control`],
  },
  {
    id: 3,
    company: "laboratory of tourism",
    country: "indonesia",
    city: "surabaya",
    position: "travel agent",
    period: "August 2016 - February 2019",
    description: [`Making Itinerary`, `Booking`, `Ticketing`, `Tour Leader`],
  },
  {
    id: 4,
    company: "mostras company",
    country: "indonesia",
    city: "surabaya",
    position: "online marketing staff",
    period: "August 2016 - October 2017",
    description: [
      `Handling online advertisement using social media (Instagram, Whatsapp, Line), radio, and email`,
      `Create contents, budget planning, advertising schedule`,
      `Research and analyze competitor’s campaign/advertisement`,
      `Report progress to senior online marketing`,
    ],
  },
  //   {
  //     id: 0,
  //     company: "",
  //     country: "indonesia",
  //     city: "",
  //     position: "",
  //     period: "",
  //     description: [``, ``],
  //   },
];

export default function Experiences() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.subhead}>portfolio</div>
        {portfolio.map((porto) => {
          return (
            <div className={styles.each}>
              <div>
                project name :{" "}
                <span className={styles.name}>{porto.project}</span>
              </div>
              <div>
                website link : <a href={porto.website}>{porto.website}</a>
              </div>
              <div>
                source code : <a href={porto.source}>{porto.source}</a>
              </div>
              <div>
                role : <span className={styles.role}>{porto.role}</span>
              </div>
              <div>
                detail:
                <div className={styles.detail}>{porto.detail}</div>
              </div>
            </div>
          );
        })}
        <br />
        <div className={styles.subhead}>experiences</div>
        {experiences.map((detail) => {
          return (
            // <ul>
            // <li key={detail.id}>
            <div>
              <div>{detail.company}</div>
              <div>
                {detail.city}, {detail.country}
              </div>
              <div>
                {detail.position} ({detail.period})
              </div>
              <div>
                {detail.description.map((list) => {
                  return <div>{list}</div>;
                })}
              </div>
            </div>
            // </li>
            // </ul>
          );
        })}
      </section>
    </>
  );
}
