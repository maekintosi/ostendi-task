import React from 'react';
import { useLocation } from 'react-router-dom';

const Users = () => {
    const location = useLocation();

    if (location.pathname === '/users/details') {
        // prep to show the dialog
    }
    
    return (
        <div>Users</div>
    )
}

export default Users;