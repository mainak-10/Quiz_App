//import React from "react";

const Menu=()=>{

  return(
    <>
      <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link 1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 2</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 3</a>
      </li>
    </ul>
  </div>
</nav>

<div className="container-fluid mt-3">
  <h3>Basic Navbar Example</h3>
  <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
  <p>The navbar-expand-xxl|xl|lg|md|sm class determines when the navbar should stack vertically (on xxlarge, extra large, large, medium or small screens).</p>
</div>
    </>
  )
};
export default Menu;