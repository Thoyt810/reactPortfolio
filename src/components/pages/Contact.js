import React from "react";
import Picture from "../images/beach.jpg";

function Contact() {
  return (
    <div
      style={{
        backgroundImage: `url(${Picture})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
      }}
    >
      <section class="row">
        <div class="col-md-8">
          <form class="block form-horizontal">
            <h1 class="block-header">Contact Me</h1>
            <hr />
            <div class="form-group">
              <label for="name" class="col-sm-2 control-label">
                Email
              </label>
              <div class="col-sm-10">
                <a href="Thoyt96@gmail.com"> Thoyt96@gmail.com</a>
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-2 control-label">
                Github Pages
              </label>
              <div class="col-sm-10">
                <a href="https://github.com/Thoyt810">
                  Click Here For Github Repos
                </a>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label" for="msg">
                LinkedIn Profile
              </label>
              <div class="col-sm-10">
                <a href="https://www.linkedin.com/in/thomas-hoyt-333492191/">
                  {" "}
                  To Connect on LinkedIn Click Here
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
