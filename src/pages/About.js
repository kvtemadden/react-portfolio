import React from "react";
import Skills from "../components/Skills";

export function About() {
  return (
    <div>
      <section id="hero">
        <div className="container">
          <h1 className="col">Hey, I'm <span className="hu">Kate Madden</span>.</h1>
          <p class="small-title middle mt-4"><span class="faded-20">Full Stack Web Developer </span><span class="badge badge-secondary pink-bg badge-pink">Cert</span></p>
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
        <section className="mx-auto mt-5">
          <div className="container">
            <h2 id="aboutMe" class="spc">about me</h2>
            <article className="about-me-para">
              <p>Hey! I'm Kate, if you hadn't already noticed.</p>
              <p>I'm an <strong>experienced Marketer</strong> by day and a <strong>Full Stack Developer</strong> by night.</p>
              <p>Certified by the completion <strong>University of Birmingham's bootcamp</strong>, and fully-stacked with knowledge ready to make your site a client magnet.</p>
              <p>From <strong>SEO</strong> to both <strong>front</strong> and <strong>back-end development</strong>, I'm always excited to take on new challenges and turn your dreams into real life, usable developments.</p>
              <p>Get in touch today for either a no obligation discussion around your project, or even just a chat!</p>
              <p>Look forward to our conversation.</p>
              <p>Kate</p>
            </article>
          </div>
        </section>
        <Skills/>
        <section className="mx-auto bg-white">
          <div class="container short-border middle">
            <h2 class="spc">let's connect</h2>
            <div className="row col-sm-8 col-md-6 mt-5" id="profBtns">
              <a className="col mx-2" href="https://github.com/kvtemadden" target="_blank" rel="noreferrer">GitHub</a>
              <a className="col mx-2" href="https://www.linkedin.com/in/kate-madden-703612125/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;