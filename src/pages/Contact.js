import React from "react";

export function About() {

  return (
<section class="mx-auto mt-5 container">
<div class="row bg">
  <h2 class="col-12">Get in touch!</h2>
    <form action="form-submit.html" method="POST" class="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Your name"/>
      </div>
      <div class="form-group">
        <label for="emailAddress">Email address</label>
        <input type="email" class="form-control" id="emailAddress" placeholder="name@example.com"/>
      </div>
      <div class="form-group">
        <label for="message">Your message</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-pink">Send Message</button>
    </form>
    <p class="col-12 mt-5">07123456789  |  <a href="mailto:kate@email.com">kate@email.com</a></p>
  </div>
</section>
);
}

export default About;