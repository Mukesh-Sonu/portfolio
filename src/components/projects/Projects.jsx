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
      github: "https://github.com/Mukesh-Sonu/Task-manager-using-json-server",
    },
    {
      id: 2,
      image: expensetracker,
      title: "Expense Tracker",
      github: "https://github.com/Mukesh-Sonu/Expense-Tracker",
    },
    {
      id: 3,
      image: gitfinder,
      title: "GitHub Finder",
      github: "https://github.com/Mukesh-Sonu/github-finder",
    },
    {
      id: 4,
      image: feedback,
      title: "Feedback App",
      github: "https://github.com/Mukesh-Sonu/Feedback-app",
    },
    {
      id: 5,
      image: Cm,
      title: "Contact Manager",
      github: "https://github.com/Mukesh-Sonu/Contact-Manager",
    },
    {
      id: 6,
      image: Rb,
      title: "Recipe Book",
      github: "https://github.com/Mukesh-Sonu/Recipe-Book-Angular-",
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
              <a href={item.github} className="btn btn-git" target="blank">
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
