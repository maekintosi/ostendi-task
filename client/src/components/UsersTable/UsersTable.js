import React from 'react';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function UsersTable() {
    const { users } = useSelector(state => state.users);

    return (
        users.length ? 
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Imię i nazwisko</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Nazwa stanowiska</TableCell>
                        <TableCell align="right">Pion / Dział</TableCell>
                        <TableCell align="right">Jednostka organizacyjna</TableCell>
                        <TableCell align="right">Data modyfikacji</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(({name, email, position, department, organization, date, status}) => (
                            <TableRow
                                key={name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <div style={{display: 'inline-flex'}}>
                                        {name[0]}{name.split(' ')[1][0]}
                                    </div>
                                    {name}
                                </TableCell>
                                <TableCell>{email}</TableCell>
                                <TableCell>{position}</TableCell>
                                <TableCell>{department}</TableCell>
                                <TableCell>{organization}</TableCell>
                                <TableCell>{date}</TableCell>
                                <TableCell>
                                    <CheckCircleIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        : <CircularProgress />
    )
}
