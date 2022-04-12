import { Link } from "react-router-dom";
import React, { useState } from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMarketing: true,
        };
      

    }

    render() {
        return (
            <section className="mx-auto mt-5 bg-dark">
                <div className="container col-12 col-lg-6 no-mb middle">
                    <h2 className="spc white-text">skills</h2>

                    <div>
                        <button onClick={() => this.setState({isMarketing: true })} className={`${this.state.isMarketing === true ? 'btn-pink' : 'color-white'} btn mr-2`}>marketing</button>
                        <button onClick={() => this.setState({isMarketing: false })} className={`${this.state.isMarketing === false ? 'btn-pink' : 'color-white'} btn`}>development</button>
                    </div>
                    <div className={`${this.state.isMarketing === true ? '' : 'hide'}`}>
                    <p className="white-text left-align skill-label">Adobe Illustrator</p>
                    <div className="skill-container">
                        <div className="skills html"></div>
                    </div>

                    <p className="white-text left-align skill-label">Email marketing</p>
                    <div className="skill-container">
                        <div className="skills css"></div>
                    </div>
                    </div>
                    <div className={`${this.state.isMarketing === false ? '' : 'hide'}`}>
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
                </div>
            </section>
        );
    }
}

export default Navbar;