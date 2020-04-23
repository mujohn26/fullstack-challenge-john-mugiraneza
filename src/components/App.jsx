import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Comment from '../views/Comment.jsx';
import Welcome from '../views/Welcome.jsx';



class App extends Component {

	render() {
		return (
			<div className='app'>
				<Router>
					<Switch>
						<Route path='/' exact component={Welcome} />
						<Route path='/comments' component={Comment} />
						{/* <PrivateRoute path='/' component={DefaultLayout} /> */}
					</Switch>
				</Router>
			</div>
		);
	}
}
export default App;