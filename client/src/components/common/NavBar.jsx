import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/userAction';

class NavBar extends Component {

	onLogout = () => {
		const {logout} = this.props;
		localStorage.clear();
		logout();
	};

	render() {
		const {isAuthenticated} = this.props;
		return (
			<header>
				<div className="container">
					<div className="logo-name">
						<h1 className="logo-name-style">
							<Link to="/">Nu-<span className="fast-color">Binary</span></Link>
						</h1>
					</div>
					<div className="login-signup">
						{
							!isAuthenticated ? (
								<div>
									<Link className="login-link" to="/login">Log In</Link>
									<Link className="signup-link" to="/signup">Sign Up</Link>
								</div>
							) : <div><Link onClick={this.onLogout} className="logout-link" to="/">Logout</Link></div>
						}
					</div>
				</div>
			</header>
		);
	}
}

const mapStateToProps = ({currentUser}) => {
	return {
		isAuthenticated: currentUser.isAuthenticated
	}
};

export default connect(mapStateToProps, {logout})(NavBar);
