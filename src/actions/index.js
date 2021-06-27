import jsonPlaceHolder from '../api/jsonPlaceHolder'
import _ from 'lodash'

export  const postsList =  () => async dispatch => {
    const response = await  jsonPlaceHolder.get('/posts');
    dispatch({
        type:'FETCH_POSTS',
        payload: response.data
    })
}

export  const authorDetails =  (id) =>  dispatch => {
    _authorDetails(id, dispatch)
}

const _authorDetails = _.memoize( async (id, dispatch) => {
    const response = await  jsonPlaceHolder.get(`/users/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload: response.data
    })
})