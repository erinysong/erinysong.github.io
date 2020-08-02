import React from 'react';
import profile from '../profile.json';
import ReactHtmlParser from 'react-html-parser';

const experience = profile.experience;
const communities = profile.communities;

class Experience extends React.Component {
	render() {
		return(
			<div className="fadein-page">
		    	<p className="subtitle"><span className="highlight">some old stomping grounds</span></p>
				<div className="experienceDescription">
					{experience.map((company) => (
						<div className="subsection">
							<h1>{company.name}</h1>
							{company.roles.map(role => (
								<div>
									<h2>{role.title}, {role.time}</h2>
									<p className="roleDescription">{ReactHtmlParser(role.description)}</p>
								</div>
							))}
						</div>
					))}
				</div>
								
				<p className="subtitle communitySection"><span className="highlight">some communities i'm grateful for</span></p>
				<div className="experienceDescription">
					{communities.map((community) => (
						<div className="subsection">
							<h1><a href={community.url} target="_blank" rel="noopener noreferrer" class="underlineLink underlineLink-title">{community.name}</a></h1>
							{community.roles.map(role => (
								<div className="subsection">
									<h2>{role.title}, {role.time}</h2>
									<p className="roleDescription">{role.description}</p>
								</div>
							))}
						</div>
					))}
				</div>
    		</div>
		)
	}
}

export default Experience;