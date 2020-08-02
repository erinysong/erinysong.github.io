import React from 'react';

class Now extends React.Component {
    render() {
        return (
            <div className="aboutColumn fadein-page">
                <p className="subtitle aboutSubtitle"><span className="highlight">what i’m up to these days</span></p>
                <p>[ as of August 2020 ]</p>

                {/* <div className="subsection">
                    <h1>Learning About</h1>
                    <p className="aboutListItem">Sound and Music Computing (Music 158A)</p>
                    <p className="aboutListItem">Information Devices and Systems (EE 16B)</p>
                    <p className="aboutListItem">History and Practice of Human Rights (History C187D)</p>
                    <p className="aboutListItem">Data Science in Global Change Ecology (ESPM 157)</p>
                    <p className="aboutListItem">Sex, Death, and Data (Sociology C126)</p>
                </div> */}

                <div className="subsection">
                    <h1>Developing AI Tools <a href = "https://www.microsoft.com/en-us/" target="_blank" className="underlineLink">@Microsoft</a></h1>
                    <p className="aboutListItem">Using Lobe.ai to incorporate image classification & deep learning models into IoT devices.</p> 
                        <p>Learning cool things about hardware, iOS development, and deep learning (none of which I have prior experience with woOo :")).</p>
                </div>
                
                <div className="subsection">
                    <h1>Building Tech for Nonprofits <a href = "https://calblueprint.org/" target="_blank" className="underlineLink">@Blueprint</a></h1>
                    <p className="aboutListItem">Continuing my work in Blueprint as a project leader for one of our five pro-bono nonprofit projects.</p> 
                        <p>Currently working over summer to source and communicate with potential nonprofit partners and scope their technological needs.</p>
                </div>

                <div className="subsection">
                    <h1>Currently Reading</h1>
                    <p className="aboutListItem">The New Jim Crow by Michelle Alexander</p>
                    <p className="aboutListItem">Good Omens by Neil Gaiman and Terry Pratchett</p>
                </div>
                
                <div className="subsection">
                    <h1>Currently Watching</h1>
                    <p className="aboutListItem">Community</p>
                    <p className="aboutListItem">HunterxHunter</p>
                </div>

                <div className="subsection">
                    <h1>Life in General</h1>
                    <p className="aboutListItem">Reviving my digital archive of literary quotes and phrases.</p>
                    <p className="aboutListItem">Trying to run 1.5+ miles daily after one too many nightmares about failing to outrun the zombie apocalypse.</p>
                    <p className="aboutListItem">Rediscovering my appreciation for video game soundtracks.</p>
                    <p className="aboutListItem">Taking a class on computational music using MAX/MSP.</p>
                </div>

            </div>
        )
    }
}

export default Now;