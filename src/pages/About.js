import React from "react";

export function About() {
    return (
<div>
<section id="hero">
<div className="container">
  <h1 className="col">Hey, I'm <span className="hu">Kate Madden</span>.</h1>
  <div className="row col-sm-8 col-md-6 mt-5" id="profBtns">
    <a className="col mx-2" href="https://github.com/kvtemadden" target="_blank">GitHub</a>
    <a className="col mx-2" href="https://www.linkedin.com/in/kate-madden-703612125/" target="_blank">LinkedIn</a>
    <a className="col mx-2" href="https://drive.google.com/file/d/1qKPYFwN7GGvhow31_IqjD1DwMvZkEsGz/view?usp=sharing" target="_blank">CV</a>
  </div>
  <p className="col faded mt-5">Scroll down...</p>
  <div className="arrow bounce">
    <a className="fa fa-arrow-down fa-2x" href="#aboutMe"></a>
  </div>
</div>
</section>
<div id="divider">
<div className="custom-shape-divider-top-1613058600">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
  </svg>
</div>
</div>
<div>
<section className="mx-auto mt-5 container">
  <div className="row bg">
    <h2 id="aboutMe">About Me</h2>
    <article className="col-12">
      <div className="row">
        <div className="col-6">
          <h3>Bio</h3>
          <p>Hey, I'm Kate! I'm currently 21 working in Marketing and studying Web Development. I recently had a new addition to the family, Finn (pictured to the right), he's a Cocker Spaniel & absolutely brilliant.</p>
          <p>One of my favourite times of year is Halloween because I absolutely love autumn. I love the crisp air (which isn't too cold) and particularly enjoy pumpkin picking. Plus, warm drinks after you've been outside in the cold? What's not to love!</p>
          <h3>Socials</h3> 
          <ul>
            <li><img className="social-logos" src="https://github.com/kvtemadden/portfolio/blob/main/Assets/instagram.png" alt="Instagram logo"/><a href="https://www.instagram.com/kvtemadden/" target="_blank" title="Instagram Profile">Instagram</a></li>
            <li><img className="social-logos" src="https://github.com/kvtemadden/portfolio/blob/main/Assets/facebook.png" alt="Faceboook logo"/><a href="https://www.facebook.com/xkatemadden" target="_blank" title="Instagram Profile">Facebook</a></li>
          </ul>
        </div>
        <div className="col-6 mid">
          <img className="img-fluid resize-img" src="https://github.com/kvtemadden/portfolio/blob/main/Assets/Kate_and_Mol.jpg" alt="Kate (me) with brown hair, and Mollie (my partner), pumpkin picking!"/>
          <br/>
          <img className="img-fluid resize-img" src="https://github.com/kvtemadden/portfolio/blob/main/Assets/Finn.jpg" alt="Finn the dog!"/>
        </div>
      </div>
    </article>
  </div>
</section>
</div>
</div>
);
}

export default About;