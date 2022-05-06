import { GET_USERS } from '../constants/actionTypes';

export default function UsersReducer (state = { users: [] }, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state }
        default:
            return { ...state }
    }
}