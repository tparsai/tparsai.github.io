function ProjectCard(props) {
  return (
    <>
      <div
        className="row project-card"
        data-toggle="modal"
        data-target={`#${props.id}`}
        data-portfolio-tag="web-sites"
      >
        <div className="col-md-6 col-lg-5 project-card__img">
          <img className="" src={props.imgUrl} alt="project-img" />
        </div>
        <div className="col-md-6 col-lg-7 project-card__info">
          <h3 className="project-card__title">{props.title}</h3>
          <p
            className="project-card__description"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></p>
          <p className="project-card__stack">Technologies used:</p>
          <ul className="tags">
            {props.technologies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="modal fade portfolio-modal"
        id={props.id}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
              <p className="portfolio-modal__title">
                <b>{props.title}</b>
              </p>
              <img
                className="portfolio-modal__img"
                src={props.imgUrl}
                alt="modal_img"
              />
              <p
                className="portfolio-modal__description"
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></p>

              <div className="portfolio-modal__stack">
                <p className="portfolio-modal__stack-title">
                  Technologies used:
                </p>
                <ul className="tags">
                  {props.technologies.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
