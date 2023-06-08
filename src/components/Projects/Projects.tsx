import "./Projects.scss";
import  Button from "../Button/Button"
import myportfolioImage from '../../assets/images/myportfolio.png';
import trackerImage from '../../assets/images/tracker.png';


const Projects = () => {
  const projectDetails = [
    {
      name: "Portfolio",
      img: myportfolioImage,
      github: "https://github.com/SathwikGM/myportfolio",
      demo: "https://sathwikgm.netlify.app/",
      description:"Portfolio is a personal website that showcases my work, skills, and accomplishments. It serves as a digital portfolio or resume, allowing me to present my projects, experience, and expertise ",

    },
    {
      name: "Tracker",
      img: trackerImage,
      github: "https://github.com/SathwikGM/bug-tracker",
      demo: "https://sathwikgm.netlify.app/",
      description:"Tracker is a Bug tracking software which lets you create and manage bugs. It is still under development and new features will be addded soon",
    }
  ]

  const project = projectDetails.map((project) => {
    return (
      <li>
        <div>
          <img src={project.img}  alt={project.name} />
        </div>
        <div>
          <h2>{project.name}</h2>
        <p>{ project.description}</p>
          <Button><a href={project.github}>github</a></Button>
          <Button><a href={project.demo}>Demo</a></Button>
        </div>
      </li>
    )
  });

  return (
    <div className="Projects">
      <h2>Projects</h2>
      <ul>
        {project}
      </ul>
    </div>
  )
}

export default Projects