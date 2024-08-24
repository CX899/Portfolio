import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./bell.png"
								alt="bell"
								className="work-image"
							/>
							<div className="work-title">Bell</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Summer 2024</div>
						</div>

						<div className="work">
							<img
								src="./cisco.png"
								alt="cisco"
								className="work-image"
							/>
							<div className="work-title">Cisco</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Summer 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
