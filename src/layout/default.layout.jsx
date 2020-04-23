import React, { PureComponent } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Signup from '../views/signup/signup.view.jsx';
import Signin from '../views/signin.view.jsx';
import ForgotPassword from '../views/passwordReset/ForgotPassword';
import ResetPassword from '../views/passwordReset/ResetPassword ';
import ResetNotification from '../components/password/passwordNotification.jsx';
import { ResetNofiticationSucess } from '../components/password/passwordNotification.jsx';
import Confirm from '../views/signup/confirm.view.jsx';
import ActivateUser from '../views/signup/activate_user.view.jsx';
import NotFound from '../views/404.view.jsx';


class DefaultLayout extends PureComponent {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Redirect to='/comments' />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default DefaultLayout;
