import React from 'react';

class Fun extends React.Component {
    render() {
        return (
            <div className="descriptionColumn fadein-page">
                <p className="subtitle aboutSubtitle"><span className="highlight">a hodgepodge list of things i enjoy</span></p>
                <div className="subsection">
                    <h1>Books</h1>
                    <p className="aboutListItem">Hitchhiker’s Guide to the Galaxy</p>
                    <p className="aboutListItem">Catch 22</p>
                </div>
                
                <div className="subsection">
                    <h1>Blogs/Online Media</h1>
                    <p className="aboutListItem">Wait But Why</p>
                    <p className="aboutListItem">Hyperbole and a Half</p>
                    <p className="aboutListItem">Nicky Case</p>
                    <p className="aboutListItem">TV Tropes</p>
                </div>

                <div className="subsection">
                    <h1>Movies</h1>
                    <p className="aboutListItem">Klaus</p>
                    <p className="aboutListItem">Spider-man: Into the Spider-Verse</p>
                </div>
                
                <div className="subsection">
                    <h1>TV/Netflix Standups</h1>
                    <p className="aboutListItem">Bojack Horseman</p>
                    <p className="aboutListItem">what. and Make Happy by Bo Burnham</p>
                    <p className="aboutListItem">Jigsaw by Daniel Sloss</p>
                </div>

                <div className="subsection">
                    <h1>Anime</h1>
                    <p className="aboutListItem">Fate/Zero</p>
                    <p className="aboutListItem">FMA: Brotherhood</p>
                    <p className="aboutListItem">Haikyuu!!</p>
                </div>
                
                <div className="subsection">
                    <h1>Subjects</h1>
                    <p className="aboutListItem">Inclusive Design</p>
                    <p className="aboutListItem">Behavioral Psychology</p>
                    <p className="aboutListItem">Education</p>
                    <p className="aboutListItem">Film and Media Studies</p>
                </div>
                
                <div className="subsection">
                    <h1>Hobbies</h1>
                    <p className="aboutListItem">Cooking (especially for other people!)</p>
                    <p className="aboutListItem">Playing Board Games</p>
                    <p className="aboutListItem">Dogspotting</p>
                    <p className="aboutListItem">Writing</p>
                </div>
            </div>
        )
    }
}

export default Fun;