import React from 'react';
import Fun from './Fun.js';
import Now from './Now.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import profile from '../img/profile.jpg'
import resume from '../assets/Erin_Song_Resume.pdf'

class About extends React.Component {
    render() {
        return (
            <div className="fadein-page">
                <div className="flexContainer aboutSection">
                    <div class="aboutImgSection">
                        <img src={profile} className="aboutImg" alt="it me"/>
                        <p className="aboutImgCredit">photo taken by Rachel He</p>
                    </div>
                    <div className="aboutDescription">
                        <h1>Nice to meet ya! I'm Erin.</h1>
                        <p>
                            I believe in building solutions (tech and non-tech!) that positively impact people's lives and help us better understand the world and each other.
                        Currently I'm a rising senior at UC Berkeley studying computer science, with minors in data science & human rights.
                        </p>
                        <p>Wanna chat or grab a cup of tea? Feel free to reach me at erinsong@berkeley.edu - I'd love to get to know you!</p>
                        <div className="flexContainer">
                            <a href = "https://github.com/erinysong" target="_blank" rel="noopener noreferrer" className="socialLink underlineLink">github</a>
                            <a href = "https://www.linkedin.com/in/erinsong/" rel="noopener noreferrer" target="_blank" className="socialLink underlineLink">linkedin</a>
                            <a href = {resume} target="_blank" rel="noopener noreferrer" className="underlineLink">resume</a>
                        </div>
                    </div>
                </div>

                <Router>
                    <div>
                        <div class="navbar navbar-about">
                            <NavLink exact to="/about" activeClassName="activeLink">hobbies</NavLink>
                            <NavLink to="/about/now" className="navItem-about" activeClassName="activeLink">now</NavLink>
                        </div>

                        <Switch>
                            <Route exact path={process.env.PUBLIC_URL + "/about"}>
                                <Fun/>
                            </Route>
                            <Route exact path={process.env.PUBLIC_URL + "/about/now"}>
                                <Now/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default About;