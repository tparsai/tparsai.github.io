function WorkExperience() {
  return (
    <div className="col-md-8 section__resume resume-list">
      <h3 className="resume-list_title">experience</h3>
      <div className="resume-list__block">
        <p className="resume-list__block-title">
          Consultant, PayPal (Hyperwallet)
        </p>
        <p className="resume-list__block-date">
          <span className="location-span">
            <i className="fa fa-calendar"></i> &nbsp;Apr 2020 - Current
          </span>
          <i className="fa fa-map-marker"></i> &nbsp;Chennai, IN
        </p>
        <p className="profile-education-para">
          <b>Hyperwallet</b> in PayPal supports mass payment for small and
          medium size business, large enterprise as well as payouts for market
          place platform.
          <br />
          <b>Backend:</b> JSF, EJB
          <br />
          <b>Database:</b> Hibernate
          <br />
          <b>Frontend:</b> ReactJS, Javascript
          <br />
          <ul className="profile-education-ul">
            <li>
              Migration of wallet tree hierarchy which display all the program
              related to Hyperwallet merchants. Migrated from JSF to prime face
              library.
            </li>
            <li>UI bug fixes.</li>
            <li>
              Insertion, update and delete feature togglz pattern of newly
              introduced features.
            </li>
          </ul>
        </p>
      </div>

      <div className="resume-list__block">
        <p className="resume-list__block-title">
          Consultant, PayPal (Authentication)
        </p>
        <p className="resume-list__block-date">
          <span className="location-span">
            <i className="fa fa-calendar"></i> &nbsp;Dec 2019 - Apr 2020
          </span>
        </p>
        <p className="profile-education-para">
          PayPal <b>Authentication</b> service verifies the upcoming user and
          authorizes various permissions to the users based on their accounts
          and allows user to enter into PayPal payment gateway.
          <br />
          <b>Backend:</b> Spring Boot, Raptor framework
          <br />
          <b>Database:</b> Oracle, Hibernate
          <br />
          <ul className="profile-education-ul">
            <li>Migration of services from C++ to Java.</li>
            <li>
              Analyzed various legacy APIs and migrated them into ILAS,
              following MVC design pattern while developing the APIs.
            </li>
            <li>Performed Test Driven Development and DML operations.</li>
          </ul>
        </p>
      </div>
      <div className="resume-list__block">
        <p className="resume-list__block-title">
          Consultant, PayPal (Merchants SDK)
        </p>
        <p className="resume-list__block-date">
          <span className="location-span">
            <i className="fa fa-calendar"></i> &nbsp;Oct 2019 - Dec 2019
          </span>
        </p>
        <p className="profile-education-para">
          PayPal <b>Merchants SDKs</b> provides multiple REST APIs to merchants
          to integrate PayPal payment gateway onto their websites.
          <br />
          <b>Technologies:</b> Java, Eclipse, Sherlock, JawSui
          <br />
          <ul className="profile-education-ul">
            <li>
              Supported merchants to setup the SDK environment and resolved
              their queries.
            </li>
            <li>Prepared sample PayPal payment flow.</li>
            <li>Worked on JAVA SDK Enhancement.</li>
          </ul>
        </p>
      </div>
      <div className="resume-list__block">
        <p className="resume-list__block-title">Consultant, ATOS | Syntel</p>
        <p className="resume-list__block-date">
          <span className="location-span">
            <i className="fa fa-calendar"></i> &nbsp;Aug 2018 - Feb 2019
          </span>
        </p>
        <p className="profile-education-para">
          The <b>Loan services</b> application enables to collect loan
          application from merchants either in form of email or fax and store in
          different databases based on the categories and process the collected
          data.
          <br />
          <b>Backend:</b> Spring Boot, REST API, Struts, Cucumber, Selenium
          <br />
          <b>Database:</b> MYSQL
          <br />
          <b>Frontend:</b> ReactJS, Javascript
          <br />
          <ul className="profile-education-ul">
            <li>Developed SPA dashboard from scratch using ReactJS.</li>
            <li>
              Developed new feature called View Jobs which displays the loan
              application details.
            </li>
            <li>
              Followed MVC design pattern to developed REST services using
              spring boot.
            </li>
            <li>
              Fixed bugs related to getting complete details from emails of the
              merchants.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default WorkExperience;
