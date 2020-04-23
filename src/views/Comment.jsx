import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../styles/comments';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {getCommentType,getCommentTypeAction,getCommentByType,getCommentByTypeAction} from '../actions/commentsActions';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';
import Footer from '../components/common/Footer';

class Comment extends Component{

    constructor(props) {
        super(props);
        this.state={
            commentType:''
        }
	}
handleclick=(title)=>{    
const commentType= title;
const {getCommentByType} = this.props;
getCommentByType(commentType);

}
    render(){
        const {classes} = this.props;
        return(

<Paper >
<Grid container spacing={3} >
<Grid item xs>
<Card className={classes.paper}>
<Typography className={classes.cardText} paragraph>Make selection</Typography>
<Box m={4} />
<Typography className={classes.selectBy} paragraph>Select By
<Autocomplete
  
      id="combo-box-demo"
      options={selection}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
     onChange={(e,value)=>{
         const category=value.title;
         this.props.getCommentType(category)
     }}
      renderInput={(params) => <TextField  {...params}   variant="filled" label="select"  className={classes.autocomplete} />}
    />
</Typography>

<Box m={4} />
{
this.props.commentType!=null?(this.props.commentType.map((data)=>{
    return(
<Link onClick={()=>{this.handleclick(data.title)}}>
<Typography className={classes.selected} >{data.title}</Typography><Box m={2}/>
</Link> 
    )
 })   ):(
    <Typography style={{color:'white', marginLeft:'20px',fontSize:'18px'}}>View comments based on your selection </Typography>
)
}
      </Card>
      </Grid>
<Grid item xs={8}>

{
this.props.comments!=null?(
this.props.comments.map((data=>{
    return(
<div className={classes.commentContainer}>
<Card className={classes.commentCard}>
<Grid container direction="column" justify="flex-start" alignItems="flex-start">
<Grid>
<Card style={{backgroundColor:'#F1F1F1',width:'767px',borderRadius: '10px',height:'55.8px'}}>
<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="flex-start"
>
<Grid item >
<div style={{textAlign:'center'}}>
<Typography style={{color:'#7C7575',marginLeft:'30px',marginTop:'15px'}}>{data.commentAuthor} commented</Typography>
</div>
</Grid>
<Grid>
<Typography style={{color:'#616161',marginTop:'15px'}}>
<Moment fromNow>
{data.commentCreatedAt}
</Moment>
</Typography>
</Grid>
<Grid>
<div style={{textAlign:'center'}}>
<Typography style={{color:'#616161',marginRight:'30px',marginTop:'15px'}}>
<Moment format='YYYY MMM D'>
{data.commentCreatedAt}
</Moment>
</Typography>
</div>
</Grid>
</Grid>
</Card>
</Grid>
<Grid>
<Typography className={classes.commentBody} >{data.commentTopic}</Typography><Box m={5}/>
<div className={classes.commentDesc}>
<Typography style={{color:'#616161'}}>PR Author:{data.prAuthor}</Typography>

</div>
</Grid>

</Grid>
</Card>
</div>)}))):(

<Typography style={{color:'#E5E5E5',fontSize:'30px',marginTop:'30%'}}>Welcome, make selection on the left side to view your comments</Typography>
)}
</Grid>
    </Grid><Box m={3}/>
    <Footer/>
    </Paper>
        )
    }
}
export const mapStateToProps = state => {
	return {
        commentType: state.commentReducer.payload,
        comments:state.commentReducer.comments
	
	};
};

const selection = [
    { title: 'type' },
    { title: 'topic'}]

const connectedCommentPage = connect(mapStateToProps, {
    getCommentType,getCommentTypeAction,getCommentByType,getCommentByTypeAction
})(withStyles(useStyles)(Comment));

export default connectedCommentPage;