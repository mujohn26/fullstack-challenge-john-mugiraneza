export const GET_COMMENT_TYPE = 'GET_COMMENT';
export const GET_COMMENT_BY_TYPE='GET_COMMENT_TYPE'

import axios from 'axios';


export const getCommentType = (category) => async dispatch => {

	try {
		const commentTypes = await axios.get(
            `https://codegem-challenge.herokuapp.com/api/v1/comments/getComments?category=${category}`);
		dispatch(getCommentTypeAction(commentTypes.data.data));
	} catch (error) {}
};
export const getCommentByType = (commentType) => async dispatch => {

	try {
		const commentByTypes = await axios.get(
			`https://codegem-challenge.herokuapp.com/api/v1/comments?commentType=${commentType}`);
			
		dispatch(getCommentByTypeAction(commentByTypes.data.data));
	} catch (error) {}
};

export function getCommentTypeAction(data) {
	return {
		type: GET_COMMENT_TYPE,
		payload: data,
	};
}

export function getCommentByTypeAction(data) {
	return {
		type: GET_COMMENT_BY_TYPE,
		comments: data,
	};
}
