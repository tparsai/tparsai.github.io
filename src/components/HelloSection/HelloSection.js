function HelloSection() {
  return (
    <>
      <section id="hello" className="container section">
        <div className="row">
          <div className="col-md-10">
            <h2 id="hello_header" className="section__title">
              Hello_
            </h2>
            <p className="section__description">
              I am an experienced <b>backend developer</b> proficient in
              developing highly scalable backend services in Java, Spring MVC,
              and Python. Completed my Master's in Computer Applications from{" "}
              <b>Vellore Institute of Technology, Chennai.</b>
              Having vast experience in payments domain at <b>PayPal</b>, I have
              experience of working on large scale microservices handling 300M+
              requests. Skilled at writing well-designed, testable and efficient
              code using current best practices in software development. Also
              having good experience in <b>full stack developement</b>{" "}
              developing rich web applications in React and Angular.
              <br />
              <br />
              I love to build softwares which solves complex technical and
              business problems. I strive to continuously keep myself updated
              with the latest trends in technology. I am always looking for new
              and exciting work!
              <br />
              If you would like to have a chat, I would love to
              <a href="#contact"> hear from you!</a>
            </p>
            <a
              target="_blank"
              href="/trupti_parsai.pdf"
              className="section_btn site-btn"
            >
              <img src="/img/img_btn_icon.png" alt="" />
              Download CV
            </a>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default HelloSection;
