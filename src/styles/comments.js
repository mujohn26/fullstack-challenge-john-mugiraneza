import { textAlign } from '@material-ui/system';

export const useStyles = theme => ({
	paper: {
		minHeight: '700px',
		width: '350px',
		backgroundColor: '#4782f3',
		marginTop: '60px',
		position: 'sticky',
		position: '-webkit-sticky',
	},
	cardText: {
		color: 'white',
		textAlign: 'center',
		fontSize: '25px',
		fontWeight: 'bold',
	},
	autocomplete: {
		color: 'white',
	},
	selectBy: {
		color: 'white',
		marginLeft: '25px',
		fontSize: '19px',
	},
	selected: {
		fontSize: '20px',
		color: 'white',
		marginLeft: '32px',
		cursor: 'pointer',
	},
	commentCard: {
		width: '767px',
		height: '156px',
	},
	commentContainer: {
		marginTop: '7%',
	},
	commentBody: {
		fontSize: '24px',
		marginLeft: '300px',
		color: '#A39E9E',
	},
	commentDesc: {
		marginLeft: '6%',
	},
});
