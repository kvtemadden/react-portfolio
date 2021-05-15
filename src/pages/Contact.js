import React from "react";
import Header from "../components/Header";

export function Contact() {

  return (
    <>
    <Header page="Contact"/>
<section className="mx-auto mt-5 container">
<div className="row bg">
  <h2 className="col-12">Get in touch!</h2>
    <form action="form-submit.html" method="POST" className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
      <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Your name"/>
      </div>
      <div className="form-group">
        <label for="emailAddress">Email address</label>
        <input type="email" className="form-control" id="emailAddress" placeholder="name@example.com"/>
      </div>
      <div className="form-group">
        <label for="message">Your message</label>
        <textarea className="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-pink">Send Message</button>
    </form>
    <p className="col-12 mt-5">07123456789  |  <a href="mailto:kate@email.com">kate@email.com</a></p>
  </div>
</section>
</>
);
}

export default Contact;