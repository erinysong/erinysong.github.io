import React from 'react';
import unloop from '../img/unloop.png'
import unicornbox from '../img/unicornbox.png'
import pintos from '../img/pintos.png'
import ReactHtmlParser from 'react-html-parser';

const projects = [
    {
      "name": "Unloop Classroom Portal",
      "img": unloop,
      "category": "Full-Stack Web Development",
      "context": "<a href=\"https://www.un-loop.org/\" target=\"_blank\" class=\"underlineLink\">Unloop</a> is a Seattle-based nonprofit that provides individuals with criminal backgrounds a pathway to software careers.",
      "description": "I worked on a student-led project team to develop a web app portal allowing Unloop instructors to facilitate class operations, assign action items, and evaluate student benchmark assignments.",
	  "tools": "React, Ruby on Rails",
	  "link": "<a href=\"https://github.com/calblueprint/unloop/\" target=\"_blank\" class=\"projectLink\">github</a>"
    },
    {
      "name": "Encrypted File Sharing System",
      "img": unicornbox,
      "category": "Security",
      "context": "For my computer security class, my partner and I built a client program allowing users to make login accounts, load/store/edit files, share files to other users, and revoke file access privileges.",
      "description": "To enforce security, we used public key encryption, HMACs, and digital signatures. We later implemented security against XSS, CSRF, and SQL injection attacks on a web app version of the program.",
      "tools": "Golang"
    },
    {
      "name": "OS Kernel",
      "img": pintos,
      "category": "Systems Design",
      "context": "For my OS class, I worked in a team of 4 to implement PintOS features including user program management, priority thread scheduling, caching, syscalls, and fast file system.",
      "description": "Please never ask me about this project. I remember nothing about it. This blurb only exists as a reminder that me coding in C for 4 months was indeed not some weird fever dream.",
      "tools": "C, gdb"
    }
  ]

class Projects extends React.Component {
	render() {
		return (
			<div className="fadein-page">
				<p className="subtitle"><span className="highlight">some things i've built</span></p>
				{projects.map((project) => (
					<div className="flexContainer projectSection">
						<img src= {project.img} alt="project img" className="projectImg" />
						<div className="descriptionColumn">
							<h1>{project.name}</h1>
							<p>{ReactHtmlParser(project.context)}</p>
							<p>{project.description}</p>
							<p>{ReactHtmlParser(project.link)}</p>
						</div>
					</div>
				))}
			</div>
		)
	}
}

export default Projects;