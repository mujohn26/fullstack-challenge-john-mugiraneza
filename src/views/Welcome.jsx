import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Footer from '../components/common/Footer';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({
	forceRefresh: true,
});
class Welcome extends Component {
    handleClick(){
history.push('/comments');
}
	render() {
		return (
			<div>
				<Grid container spacing={3}>
					<Grid item xs={7}>
						<img
							height='757px'
							width='757px'
							src='https://res.cloudinary.com/dldhipetm/image/upload/v1587647109/codegem/3411109_1_oppgdp.svg'
							alt='logo'
						/>
					</Grid>
					<Grid>
						<div style={{ marginTop: '50%'}}>
							<Typography style={{fontSize:'22px'}}>
								Welcome,the button below direct to view comment page
							</Typography>
							<Box m={4} />
							<Button variant='contained' color='primary' style={{marginLeft:'32%'}} onClick={this.handleClick.bind(this)}>
								View comments
							</Button>
						</div>
					</Grid>
				</Grid>
<Footer/>
			</div>
		);
	}
}

export default Welcome;
