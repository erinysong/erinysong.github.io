import React from 'react';
import profile from '../profile.json';
import ReactHtmlParser from 'react-html-parser';

const experience = profile.experience;
const communities = profile.communities;

class Experience extends React.Component {
	render() {
		return(
			<div className="fadein-page">
		    	<p className="subtitle"><span className="highlight">I touched code at some places, including:</span></p>
				<div className="experienceDescription">
					{experience.map((company) => (
						<div className="subsection">
							<p className="roleDescription">
								{ReactHtmlParser(company.description)}
							</p>
						</div>
					))}
				</div>
								
				<p className="subtitle communitySection"><span className="highlight">I spent many hours:</span></p>
				<div className="experienceDescription">
					{communities.map((community) => (
						<div className="subsection">
							<p className="roleDescription">
								{ReactHtmlParser(community.description)}
							</p>
						</div>
					))}
				</div>
    		</div>
		)
	}
}

export default Experience;