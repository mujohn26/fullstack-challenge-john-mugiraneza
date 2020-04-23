
const commentReducer =(state={},action)=>{    
    switch (action.type) {
       case 'GET_COMMENT': 
       return{
           ...state,
           payload: action.payload
           
      }
      case 'GET_COMMENT_TYPE': 
      return{
          ...state,
          comments: action.comments
          
     }
        default: return state
            

    }
}
export default  commentReducer;