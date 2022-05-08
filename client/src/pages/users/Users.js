import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import UsersTable from '../../components/UsersTable/UsersTable';
import ChartsModal from '../../components/ChartsModal/ChartsModal';

import { getUsers } from '../../actions/users';

const Users = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ openDialog, setOpenDialog ] = useState(typeof id !== 'undefined' || false);
    const [ chosenUser, setChosenUser ] = useState(id || 1);
    const { users } = useSelector(state => state.users);

    console.log('here');

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    
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