function Education() {
  return (
    <div className="col-md-8 section__resume resume-list">
      <h3 className="resume-list_title">education</h3>
      <div className="resume-list__block">
        <p className="resume-list__block-title">
          Vellore Institute of Technology
        </p>
        <p className="resume-list__block-date">
          <span className="location-span">
            <i className="fa fa-calendar"></i> &nbsp;2016 - 2018
          </span>
          <i className="fa fa-map-marker"></i> &nbsp;Chennai, IN
        </p>
        <p className="profile-education-para">
          <ul className="profile-education-ul">
            <li>
              <b>Master of Computer Applications</b>, 9.05 CGPA.
            </li>
            <li>Rank holder in computer science department.</li>
            <li>
              Published and presented research papers in various conferences.
            </li>
          </ul>
          <br />
        </p>
      </div>
      <div className="resume-list__block">
        <p className="resume-list__block-title">
          Nimar Institute of Technology
        </p>
        <p className="resume-list__block-date">
          <span className="location-span">
            <i className="fa fa-calendar"></i> &nbsp;2013 - 2016
          </span>
          <i className="fa fa-map-marker"></i> &nbsp;Madhya Pradesh, IN
        </p>
        <p className="profile-education-para">
          <ul className="profile-education-ul">
            <li>
              <b>Bachelor of Computer Applications</b>, 70% aggregate.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Education;
