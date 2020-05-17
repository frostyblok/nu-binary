import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/userAction';
import SignupForm from '../forms/SignupForm.jsx';
import { SIGNUP_USER } from '../../actions/types.js';

class SignupPage extends Component {
	state = {
		email: '',
		password: '',
		password_confirmation: ''
	};

	componentDidUpdate() {
		const { currentUser, history } = this.props;
		if (currentUser.type === SIGNUP_USER) {
			history.push('/calculator');
		}
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	signUpUser = (event) => {
		event.preventDefault();
		const { email, password, password_confirmation } = this.state;
		const payload = { email, password, password_confirmation };
		this.props.signupUser(payload);
	};

	render() {
		return (
			<section className="signup-page">
				<div className="container">
					<div className="center-font-logo"><i id="logo" className="fa fa-cutlery"></i></div>
					<div className="sign-text">
						<h1 className="sign-style">WELCOME TO<br /><span className="coll-red"> NU</span> BINARY</h1>
						<h3 className="sign-style-min">Sign Up now and start making calculations</h3>
					</div>
					<div className="login-card signup-card">
						<h1 className="login-text">Sign Up</h1>
						<div className="form">
							<div id="main-modal">
								<div id="main-modal-content">
									<div id="display-para">
									</div>
								</div>
							</div>
							<SignupForm
								onChange={this.onChange}
								onSubmit={this.signUpUser}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = ({currentUser}) => {
	return {currentUser}
};


export default connect(mapStateToProps, {signupUser})(SignupPage);
