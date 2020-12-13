const FACEBOOK_LINK = "https://www.linkedin.com/in/trupti-parsai/";
const LINKEDIN_LINK = "https://www.linkedin.com/in/trupti-parsai/";
const GITHUB_LINK = "https://www.linkedin.com/in/trupti-parsai/";

function Header() {
  return (
    <header
      className="main-header"
      style={{ backgroundImage: "url('/img/coding_bg.jpg')" }}
    >
      <div className="container">
        <div className="row personal-profile">
          <div className="col-md-3 personal-profile__avatar">
            <img className="" src="/img/avatar_female.png" alt="avatar" />
          </div>
          <div className="col-md-9">
            <p className="personal-profile__name" id="name_header">
              Trupti Parsai_
            </p>
            <p className="personal-profile__work">Backend Developer</p>
            <div className="personal-profile__contacts">
              <dl className="contact-list contact-list__opacity-titles">
                <dt>Email:</dt>
                <dd>
                  <a href="mailto:trupti211095@gmail.com">
                    truptiparsai211095@gmail.com
                  </a>
                </dd>
                <dt>Address:</dt>
                <dd>Chennai, India</dd>
              </dl>
            </div>
            <p className="personal-profile__social">
              <a rel="noreferrer" href={GITHUB_LINK} target="_blank">
                <i className="fa fa-github"></i>
              </a>
              <a rel="noreferrer" href={LINKEDIN_LINK} target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a rel="noreferrer" href={FACEBOOK_LINK} target="_blank">
                <i className="fa fa-facebook-square"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
