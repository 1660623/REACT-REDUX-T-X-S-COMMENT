import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { clearToken } from '../../../../mqtt-cloud-react/src/actions/login';
import { connect } from 'react-redux';


class SetupUser extends Component {

	_onLogout = () => {
		return this.props.logout();
	}

	render() {
		return (
			<Fragment>
				<li className="dropdown notification-list">
					<div className="dropdown notification-list nav-pro-img">
						{/* eslint-disable-next-line */}
						<a className="dropdown-toggle nav-link arrow-none waves-effect nav-user"
							data-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="false"
							aria-expanded="false">
							{/* <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle" /> */}
							<h6>Xin chào! {this.props.auth.payload.username}</h6>
						</a>
						<div className="dropdown-menu dropdown-menu-right profile-dropdown">
							
							<div className="dropdown-divider" />
							<Link className="dropdown-item text-danger" to='/login' onClick={this._onLogout}>
								<i className="mdi mdi-power text-danger" /> Logout</Link>
						</div>
					</div>
				</li>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		logout: () => {
			dispatch(clearToken())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupUser);
