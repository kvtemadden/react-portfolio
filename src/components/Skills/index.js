import { Link } from "react-router-dom";
import React, { useState } from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "mkt",
        };
      

    }

    render() {
        return (
            <section className="mx-auto mt-5 bg-dark">
                <div className="container col-12 col-lg-6 no-mb middle">
                    <h2 className="spc white-text">skills</h2>

                    <div>
                        <button onClick={() => this.setState({selectedTab: "mkt" })} className={`${this.state.selectedTab === "mkt" ? 'btn-pink' : 'color-white'} btn mr-2`}>marketing</button>
                        <button onClick={() => this.setState({selectedTab: "dev" })} className={`${this.state.selectedTab === "dev" ? 'btn-pink' : 'color-white'} btn`}>development</button>
                        <button onClick={() => this.setState({selectedTab: "misc" })} className={`${this.state.selectedTab === "misc" ? 'btn-pink' : 'color-white'} btn`}>miscellaneous</button>

                    </div>
                    <div className={`${this.state.selectedTab === "mkt" ? '' : 'hide'}`}>
                    <p className="white-text left-align skill-label">Adobe Suite (Illustrator, Photoshop, Premiere Pro, After Effects)</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>

                    <p className="white-text left-align skill-label">Email Marketing</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>
                    <p className="white-text left-align skill-label">Visual/Content Marketing</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>
                    <p className="white-text left-align skill-label">PPC (AdWords, Facebook, LinkedIn)</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>
                    <p className="white-text left-align skill-label">User journey mapping (UX/UI)</p>
                    <div className="skill-container">
                        <div className="skills css"></div>
                    </div>
                    <p className="white-text left-align skill-label">SEO</p>
                    <div className="skill-container">
                        <div className="skills css"></div>
                    </div>
                    </div>
                    <div className={`${this.state.selectedTab === "dev" ? '' : 'hide'}`}>
                    <p className="white-text left-align skill-label">Product Ownership</p>
                    <div className="skill-container">
                        <div className="skills css"></div>
                    </div>
                    
                    <p className="white-text left-align skill-label">HTML</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>

                    <p className="white-text left-align skill-label">CSS</p>
                    <div className="skill-container">
                        <div className="skills css"></div>
                    </div>

                    <p className="white-text left-align skill-label">JavaScript</p>
                    <div className="skill-container">
                        <div className="skills js"></div>
                    </div>

                    <p className="white-text left-align skill-label">React</p>
                    <div className="skill-container">
                        <div className="skills react"></div>
                    </div>

                    <p className="white-text left-align skill-label">Node</p>
                    <div className="skill-container">
                        <div className="skills node"></div>
                    </div>

                    <p className="white-text left-align skill-label">MongoDB</p>
                    <div className="skill-container">
                        <div className="skills mongo"></div>
                    </div>

                    <p className="white-text left-align skill-label">mySQL</p>
                    <div className="skill-container">
                        <div className="skills sql"></div>
                    </div>

                    <p className="white-text left-align skill-label">Command Line</p>
                    <div className="skill-container">
                        <div className="skills cmd"></div>
                    </div>
                    </div>
                    {/* misc skills */}
                    <div className={`${this.state.selectedTab === "misc" ? '' : 'hide'}`}>
                    <p className="white-text left-align skill-label">Problem solving</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>

                    <p className="white-text left-align skill-label">People management</p>
                    <div className="skill-container">
                        <div className="skills css"></div>
                    </div>

                    <p className="white-text left-align skill-label">Microsoft Office</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>

                    <p className="white-text left-align skill-label">Team player</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Navbar;