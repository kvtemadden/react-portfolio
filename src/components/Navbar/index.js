import { Link } from "react-router-dom";
import React from 'react';

class Navbar extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isNavCollapsed: true,
          activeLink: window.location.pathname
        };
        this.setActive = this.setActive.bind(this);
        this.getClassNames = this.getClassNames.bind(this);
    
      }
    
      getClassNames = () => {
        if(this.state.activeLink === "/") {
          return "active nav-link";
        }
        else if(this.state.activeLink === "/contact") {
          return "active nav-link";
        }
        else if(this.state.activeLink === "/portfolio") {
          return "active nav-link";
        }
        else {
          return "nav-link";
        }
      }
    
    setActive = () => {
        this.setState(prevState => ({
          activeLink: window.location.pathname,
        }), this.getClassNames);
      }
        
 render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/"><img id="logo" src="https://github.com/kvtemadden/portfolio/blob/main/Assets/Portfolio%20Logo.png?raw=true" alt="km portfolio logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" onClick={() => this.setState((prevState => ({isNavCollapsed: !prevState.isNavCollapsed})))}>
          <span className="navbar-toggler-icon"></span>
        </button>
            <div className={`${this.state.isNavCollapsed == true ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" onClick={this.setActive} className={window.location.pathname === "/" || window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio" onClick={this.setActive}
                            className= {window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact" onClick={this.setActive}
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
}

export default Navbar;