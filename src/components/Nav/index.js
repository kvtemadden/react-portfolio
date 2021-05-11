import React from "react";

function Nav() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><img id="logo" src="https://github.com/kvtemadden/portfolio/blob/main/Assets/Portfolio%20Logo.png?raw=true" alt="km portfolio logo"/></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/portfolio">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
    </ul>

  </div>
</div>
</nav>
  );
}

export default Nav;
