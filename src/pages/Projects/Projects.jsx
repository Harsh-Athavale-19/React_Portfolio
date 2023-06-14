import MyProjects from "../../assets/json/MyProjects.json";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="text-center mb-5 mt-3">PROJECTS</h2>
          <div className="row row-cols-lg-3">
            {/* Card Starts */}
            {MyProjects.map((project) => (
              <div key={project.id} className="col d-flex justify-content-center">
                <div className="project_card">
                  <img src={project.img} className="project_card_img" alt="" />
                  <div className="project_card_body">
                    <h1 className="project_card_title">{project.name}</h1>
                    <div className="d-flex justify-content-center">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <button className="project_card_btn">Live</button>
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <button className="project_card_btn">Github</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
