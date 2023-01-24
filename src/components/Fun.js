import React from 'react';

class Fun extends React.Component {
    render() {
        return (
            <div className="aboutColumn fadein-page">
                <p className="subtitle aboutSubtitle"><span className="highlight">let's talk about...</span></p>

                <div className="subsection">
                    <h1>storytelling & media</h1>
                    <p className="aboutListItem">
                        I love how media and its different forms let us connect and communicate with 
                        each other. Books, art, films, games, videos, journalism, music, theater! 
                        Tell me about stories that matter to you. 
                    </p>
                </div>

                <div className="subsection">
                    <h1>libraries & public spaces</h1>
                    <p className="aboutListItem">
                        I try to visit at least one library or bookstore whenever I visit a new city. 
                        There's something inherently grounding in simply existing in one.
                    </p>
                </div>

                <div className="subsection">
                    <h1>information science & architecture</h1>
                    <p className="aboutListItem">
                        How do people process and interact with information? How do we design 
                        experiences that allow us to access different information?
                    </p>
                </div>

                <div className="subsection">
                    <h1>social equity & justice</h1>
                    <p className="aboutListItem">
                        Community involvement (especially at a local level) matters a lot to me. 
                        I'm expanding and developing my understanding of social issues and equity, 
                        but I want it to be at the core of whatever I do.
                    </p>
                </div>
            </div>
        )
    }
}

export default Fun;