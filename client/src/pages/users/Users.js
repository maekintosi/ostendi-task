import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import UsersTable from '../../components/UsersTable/UsersTable';
import ChartsModal from '../../components/ChartsModal/ChartsModal';

import { getUsers } from '../../actions/users';

const Users = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [ openDialog, setOpenDialog ] = useState(location.pathname === '/users/details');
    const [ chosenUser, setChosenUser ] = useState(1);
    const { users } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers());
    });
    
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <UsersTable
                setOpenDialog={setOpenDialog}
                setChosenUser={setChosenUser}
                users={users}
            />
            {
                users.length > 0 && <ChartsModal
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    userData={users[chosenUser - 1]}
                />
            }
            
        </Grid>
    )
}

export default Users;