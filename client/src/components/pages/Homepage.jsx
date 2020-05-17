import React, { Component } from 'react';

class HomePage extends Component {
	render() {
		return (
			<div>
				<section className="effective">
					<div className="container">
						<h1>Welcome to Nu-Binary Calculator!</h1>
					</div>
				</section>
				<section className="work-model">
					<div className="container">
						<div className="how-works">
							<h2 className="works-text">HOW IT WORKS</h2>
						</div>
						<div className="works-paradigm">
							<div className="text-string">
								<ul className="paradigm-style">
									<li><h4>Text strings</h4></li>
									<li><p>You input text strings into input boxes</p></li>
								</ul>
							</div>
							<div className="calculations-begin">
								<ul className="paradigm-style">
									<li><h4>Calculations Begin</h4></li>
									<li><p>System takes in input texts and make calculations with the most efficient logic</p></li>
								</ul>
							</div>
							<div className="get-result">
								<ul className="paradigm-style">
									<li><h4>Get Result</h4></li>
									<li><p>You get result with a speed of light</p></li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default HomePage;
