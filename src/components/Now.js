import React from 'react';

class Now extends React.Component {
    render() {
        return (
            <div className="aboutColumn fadein-page">
                <p className="subtitle aboutSubtitle"><span className="highlight">what i’m up to these days</span></p>
                <p>[ as of Jan 2023 ]</p>

                <div className="subsection">
                    <h1>work/career</h1>
                    <p className="aboutListItem">
                        I'm currently job searching after being laid off at Twitter. I'm a software engineer by trade, but 
                        am open to any roles that may be a good fit!
                    </p>
                </div>
                
                <div className="subsection">
                    <h1>community</h1>
                    <p className="aboutListItem">
                        I volunteer front-desk with many wonderful people at <a href = "https://peerseattle.org/" target="_blank" rel="noopener noreferrer" className="underlineLink">Peer Seattle</a>.
                    </p>
                    <p className="aboutListItem">
                        Less frequently, I volunteer at community events at the <a href = "https://wingluke.org/" target="_blank" rel="noopener noreferrer" className="underlineLink">Wing Luke Museum</a>,
                        which also has wonderful people.
                    </p> 
                </div>

                <div className="subsection">
                    <h1>books/shows/etc...</h1>
                    <p className="aboutListItem">
                        I try to record my thoughts on the books I read on 
                        this <a href = "https://airtable.com/shrEmK1EQ3cBs79mP/tblOq9Rgs0vaglxVR" target="_blank" rel="noopener noreferrer" className="underlineLink">Airtable</a>.                         
                    </p>
                    <p className="aboutListItem">
                        I also write my thoughts on games, films, and anime (albeit less consistently).
                        Contact me if you would like to read any of those databases.
                    </p>
                </div>

                <div className="subsection">
                    <h1>life in general</h1>
                    <p className="aboutListItem">This year (& after), I'm focusing on taking care of my physical health.</p>
                    <p className="aboutListItem">I'm continuing to learn Korean, my ancestral language.</p>
                    <p className="aboutListItem">I have been crocheting drawstring bags that look like fruit.</p>
                    <p className="aboutListItem">I'm trying to write more seriously. I currently am publishing my writing on a blog, 
                    whose contents I will delete at the end of 2023. I'm still too shy to share it here, but please reach out 
                    if you would like to learn more.</p>
                </div>

            </div>
        )
    }
}

export default Now;