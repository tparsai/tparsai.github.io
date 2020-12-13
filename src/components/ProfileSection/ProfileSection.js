import React, { useEffect } from "react";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

function ProfileSection() {
  useEffect(() => {
    window.animateProgressBars();
  }, []);

  return (
    <section id="profile" className="container section">
      <div className="row">
        <div className="col-md-10">
          <h2 id="resume_header" className="section__title">
            Resume_
          </h2>
        </div>
      </div>
      <div className="row">
        <Education />
      </div>
      <div className="row">
        <WorkExperience />
      </div>
      <div className="row section__resume progress-list js-progress-list">
        <Skills />
      </div>
    </section>
  );
}

export default ProfileSection;
