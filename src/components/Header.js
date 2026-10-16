function Header(props){
  function handleAbout() {
    props.setAboutVisible(true);
    props.setRecipesVisible(false);
    props.setHomeVisible(false);
    props.setCustomerLoginVisible(false);
    props.setRegistrationVisible(false);
    props.setAdminLoginVisible(false);
    props.setAdminDashboardVisible(false);
  }

  function handleHome() {
    props.setHomeVisible(true);
    props.setRecipesVisible(false);
    props.setAboutVisible(false);
    props.setCustomerLoginVisible(false);
    props.setRegistrationVisible(false);
    props.setAdminLoginVisible(false);
    props.setAdminDashboardVisible(false);
    props.setCustomerDashboardVisible(false);
  }

  function handleCustomerLogin() {
  props.setCustomerLoginVisible(true);
  props.setHomeVisible(false);
  props.setRecipesVisible(false);
  props.setAboutVisible(false);
  props.setRegistrationVisible(false);
  props.setAdminLoginVisible(false);
  props.setAdminDashboardVisible(false);
}

function handleAdminLogin() {
  props.setAdminLoginVisible(true);
  props.setHomeVisible(false);
  props.setRecipesVisible(false);
  props.setAboutVisible(false);
  props.setRegistrationVisible(false);
  props.setCustomerLoginVisible(false);
  props.setCustomerDashboardVisible(false);
  props.setAdminDashboardVisible(false);
}

  return (
    <header className="header">
      <h1 className="blog-title">🍳 Kitchen Blog</h1>

      <nav>
        <ul className="nav-menu">
          <li onClick={handleHome}>Home</li>
          <li onClick={handleAbout}>About & Contact</li>
          <li onClick={handleCustomerLogin}>Customer Login</li>
          <li onClick={handleAdminLogin}>Admin Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;