import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <h2>Contact Me</h2>
            <div className="ten columns">
              <p className="lead">
                Feel free to contact me for any work or suggestions.
              </p>
              <p className="lead">
                For a more in depth look at my projects, follow the link to my GitHub page by clicking on the icon at the top or bottom of the page.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email:
                  {resumeData.email}
                </h4>
              </div>
            </aside>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Phone:
                  {resumeData.phone}
                </h4>
              </div>
            </aside>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn:
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}