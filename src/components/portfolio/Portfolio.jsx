import "./portfolio.css";
import IMG1 from "../../assests/proj1.jpg";
function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Task Tracker",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 2,
      image: IMG1,
      title: "Task Tracker",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 3,
      image: IMG1,
      title: "Task Tracker",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 4,
      image: IMG1,
      title: "Task Tracker",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 5,
      image: IMG1,
      title: "Task Tracker",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 6,
      image: IMG1,
      title: "Task Tracker",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className="btn">
                Github
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
