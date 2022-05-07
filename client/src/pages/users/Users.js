import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import UsersTable from '../../components/UsersTable/UsersTable';
import ChartsModal from '../../components/ChartsModal/ChartsModal';

import { getUsers } from '../../actions/users';

const Users = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [ openDialog, setOpenDialog ] = useState(location.pathname === '/users/details');

    useEffect(() => {
        dispatch(getUsers());
    });
    
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <UsersTable />
            <ChartsModal
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            />
        </Grid>
    )
}

export default Users;