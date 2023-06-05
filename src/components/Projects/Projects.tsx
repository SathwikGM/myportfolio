import "./Projects.scss";

const Projects = () => {

  const projectDetails = [
    {
      name: "Portfolio",
      github: "https://github.com/SathwikGM/myportfolio",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
      name: "Tracker",
      github: "https://github.com/SathwikGM/bug-tracker",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
  ]

  const project = projectDetails.map((project) => {
    return (
      <li>
        <h2>{project.name}</h2>
        <p>{ project.description}</p>
        <a href={project.github}>github</a>
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