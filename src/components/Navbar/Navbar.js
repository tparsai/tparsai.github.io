function Navbar() {
    return (
        <div className="navbar">
  <div className="menu">
    <div className="container">
      <div className="row">
        <div className="menu__wrapper d-none d-lg-block col-md-12">
          <nav className="">
            <ul>
              <li><a href="#hello">Hello</a></li>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="menu__wrapper col-md-12 d-lg-none">
          <button type="button" className="menu__mobile-button">
            <span><i className="fa fa-bars" aria-hidden="true"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="mobile-menu d-lg-none">
    <div className="container">
      <div className="mobile-menu__close">
        <span><i className="mdi mdi-close" aria-hidden="true"></i></span>
      </div>
      <nav className="mobile-menu__wrapper">
        <ul>
          <li><a href="#hello">Hello</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
        </div>
    )
}

export default Navbar;