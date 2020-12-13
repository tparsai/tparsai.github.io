const SKILLS_LEFT_COLUMN = [
  {
    name: "Java",
    value: 95,
  },
  {
    name: "Spring Boot, Spring MVC",
    value: 90,
  },
  {
    name: "Hibernate, JPA",
    value: 85,
  },
  {
    name: "JSF, EJB",
    value: 85,
  },
];

const SKILLS_RIGHT_COLUMN = [
  {
    name: "JavScript",
    value: 85,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Machine Learning",
    value: 80,
  },
  {
    name: "Data Analytics",
    value: 85,
  },
];

function Skills() {
  return (
    <>
      <div className="col-md-12">
        <h3 className="progress-list__title">general skills</h3>
      </div>
      <div className="col-md-5 mr-auto">
        <div className="progress-list__skill">
          {SKILLS_LEFT_COLUMN.map((item, index) => (
            <div className="progress-list__skill" key={index}>
              <p>
                <span className="progress-list__skill-title">{item.name}</span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={item.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-5 mr-auto">
        <div className="progress-list__skill">
          {SKILLS_RIGHT_COLUMN.map((item, index) => (
            <div className="progress-list__skill" key={index}>
              <p>
                <span className="progress-list__skill-title">{item.name}</span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={item.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
