import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <>
      <section id="projects" className="container section">
        <div className="row">
          <div className="col-md-12">
            <h2 id="portfolio_header" className="section__title">
              My projects_
            </h2>
          </div>
        </div>
        <div className="portfolio-cards">
          {/* List Projects Here */}
          <ProjectCard
            id="project1"
            title="Adaptive Learning Model for Personalised Learning"
            description="Proposed a model called <b>Learner Object Model</b>. The model
          is trained on machine learning algorithms. The model detects the
          cognitive skills of the user, the activities of the user, and
          provides them with personalised learnings."
            imgUrl="/img/quiz.jpg"
            technologies={[
              "R",
              "PHP",
              "Machine Learning",
              "Data Analytics",
              "MySQL",
            ]}
          />
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
