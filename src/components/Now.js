import React from 'react';

class Now extends React.Component {
    render() {
        return (
            <div className="aboutColumn fadein-page">
                <p className="subtitle aboutSubtitle"><span className="highlight">what i’m up to these days</span></p>
                <p>[ as of Mar 2024 ]</p>

                <div className="subsection">
                    <h1>work/career</h1>
                    <p className="aboutListItem">
                        Currently working on domain management tools at the .gov team as a software engineering fellow at the U.S. Digital Corps.
                    </p>
                </div>
                
                {/* <div className="subsection">
                    <h1>community</h1>
                    <p className="aboutListItem">
                        I volunteer front-desk with many wonderful people at <a href = "https://peerseattle.org/" target="_blank" rel="noopener noreferrer" className="underlineLink">Peer Seattle</a>.
                    </p>
                    <p className="aboutListItem">
                        Less frequently, I volunteer at community events at the <a href = "https://wingluke.org/" target="_blank" rel="noopener noreferrer" className="underlineLink">Wing Luke Museum</a>,
                        where I work alongside people who are equally wonderful.
                    </p> 
                </div> */}

                <div className="subsection">
                    <h1>books/shows/etc...</h1>
                    <p className="aboutListItem">
                        I try to record my unprofessional thoughts on the books I read on 
                        this <a href = "https://airtable.com/shrEmK1EQ3cBs79mP/tblOq9Rgs0vaglxVR" target="_blank" rel="noopener noreferrer" className="underlineLink">Airtable</a>.                         
                    </p>
                </div>

                <div className="subsection">
                    <h1>life in general</h1>
                    <p className="aboutListItem">Continuing to learn Korean, my ancestral language.</p>
                    <p className="aboutListItem">Crocheting several stuffed shrimp to gift my friends.</p>
                    <p className="aboutListItem">Taking classes at my local community college on 
                    soup (and stock + sauces), creative writing, and fabric textiles.</p>
                </div>

            </div>
        )
    }
}

export default Now;