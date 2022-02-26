import "./projects.css";
import tasktracker from "../../assests/task-tracker.png";
import gitfinder from "../../assests/github-finder.png";
import feedback from "../../assests/feedback.png";
import expensetracker from "../../assests/expense-tracker.png";
import Rb from "../../assests/Recipe-Book.png";
import Cm from "../../assests/contact-manager.png";
function Portfolio() {
  const data = [
    {
      id: 1,
      image: tasktracker,
      title: "Task Tracker",
      github: "https://github.com",
    },
    {
      id: 2,
      image: Rb,
      title: "Recipe Book",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 3,
      image: gitfinder,
      title: "GitHub Finder",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 4,
      image: feedback,
      title: "Feedback App",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 5,
      image: Cm,
      title: "Contact Manager",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
    {
      id: 6,
      image: expensetracker,
      title: "Expense Tracker",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/17580488-NFT-Minting-Perks",
    },
  ];

  return (
    <section id="portfolio">
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <div key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className="btn">
                Github
              </a>
              {/* <a href={item.demo} className="btn btn-primary" target="blank">
                Live Demo
        </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
