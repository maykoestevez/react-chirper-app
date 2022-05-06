import { getInitialData } from '../utils/api';
import { recieveTweets } from './tweets';
import { recieveUsers } from './users';
import { setAuthedUser } from './authedUser';
import {showLoading, hideLoading} from 'react-redux-loading-bar'

const AUTH_ID = 'tylermcginnis';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({ users, tweets }) => {
            dispatch(recieveUsers(users));
            dispatch(recieveTweets(tweets));
            dispatch(setAuthedUser(AUTH_ID));
            dispatch(hideLoading())
        })
    }
}