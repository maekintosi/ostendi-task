import { FETCH_USERS } from '../constants/actionTypes';
import * as api from '../api';

export const getUsers = () => async (dispatch) => {
    const { data } = await api.fetchUsers();

    try {
        dispatch({
            type: FETCH_USERS,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}