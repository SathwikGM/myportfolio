import "./Projects.scss";

const Projects = () => {

  const projectDetails = [
    {
      name: "Portfolio",
      img:'/src/assets/myportfolio.png',
      github: "https://github.com/SathwikGM/myportfolio",
      demo: "https://sathwikgm.netlify.app/",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
      name: "Tracker",
      img:'/src/assets/tracker.png',
      github: "https://github.com/SathwikGM/bug-tracker",
      demo: "https://sathwikgm.netlify.app/",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
  ]

  const project = projectDetails.map((project) => {
    return (
      <li>
        <div>
          <img src={project.img} alt="" />
        </div>
        <div>
          <h2>{project.name}</h2>
        <p>{ project.description}</p>
          <a href={project.github}>github</a>
          <a href={project.demo}>Demo</a>
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