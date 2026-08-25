function Header(props){
  function handleAbout() {
    props.setAboutVisible(true);
    props.setRecipesVisible(false);
    props.setHomeVisible(false);
  }

  function handleHome() {
    props.setHomeVisible(true);
    props.setRecipesVisible(false);
    props.setAboutVisible(false);
  }

  return (
    <header className="header">
      <h1 className="blog-title">🍳 Kitchen Blog</h1>

      <nav>
        <ul className="nav-menu">
          <li onClick={handleHome}>Home</li>
          <li onClick={handleAbout}>About & Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;