import { FETCH_USERS } from '../constants/actionTypes';

export default function UsersReducer (state = { users: [] }, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload.data
            }
        default:
            return { ...state }
    }
}