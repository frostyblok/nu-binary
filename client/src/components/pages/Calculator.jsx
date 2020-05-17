import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopUp from '../pure/PopUp';
import { userResults, computeResult } from '../../actions/calculationAction';
// import '../../assets/stylesheets/Home.scss';

export class Calculator extends Component {
	state = {
		first_input: '',
		second_input: '',
		showPopUp: false
	};

	componentDidMount() {
		const { userResults } = this.props;
		userResults();
	};

	onChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		const { first_input, second_input } = this.state;
		const { computeResult } = this.props;
		const payload = { first_input, second_input }
		computeResult(payload);
		this.togglePopUp();
	};

	togglePopUp = () => {
		this.setState({
			showPopUp: !this.state.showPopUp
		});
	};

	render() {
		const { userResultsList } = this.props;
		return (
			<div className="container">
				<div className="page-content d-flex">
					{this.state.showPopUp && <PopUp onChange={this.onChange}onSubmit={this.onSubmit} closePopUp={this.togglePopUp} />}
					<div className="col-sm-12">
						<h1 className="activities text-center m-20">Create Calculations</h1>
						<div className="list-activities row">
							{userResultsList && userResultsList.map(result => {
								return (
									<div className="card col-md-3 activity-card" key={result.id}>
										<div className="card-body text-center">
											<div className="first-string">First String: {result.first_string}</div>
											<div className="second-string">Second String: {result.second_string}</div>
											<div className="result">Result: {result.result}</div>
										</div>
									</div>);
							})}
						</div>
					</div>
					<div className="create-icon">
						<FontAwesomeIcon onClick={this.togglePopUp} icon={faPlusCircle} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({calculations}) => ({
	calculations,
	userResultsList: calculations.userResultsList && calculations.userResultsList.results
});

export default connect(mapStateToProps, {userResults, computeResult})(Calculator);
