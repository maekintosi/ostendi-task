import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import useStyles from './styles';

const UsersTable = ({ setOpenDialog, setChosenUser, users }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleShowDialog = (id) => {
        setOpenDialog(true);
        setChosenUser(id);
        navigate(`/users/details/${id}`);
    }

    return (
        users.length ? 
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow className={classes.tableHeadRow}>
                            <TableCell className={classes.tableCellTh}></TableCell>
                            <TableCell className={classes.tableCellTh}>Imię</TableCell>
                            <TableCell className={classes.tableCellTh}>Nazwisko</TableCell>
                            <TableCell className={classes.tableCellTh}>Wynik</TableCell>
                            <TableCell className={classes.tableCellTh}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(({id, firstName, lastName, evaluationAverage}) => (
                            <TableRow
                                key={`${id}${firstName}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className={classes.tableBodyRow}
                            >
                                <TableCell className={classes.tableCellTd}>
                                    <Checkbox
                                        sx={{
                                            color: "#d4d4d5",
                                            transform: "scale(1.75)"
                                        }}
                                    />
                                </TableCell>
                                <TableCell className={classes.tableCellTd}>
                                    {firstName}
                                </TableCell>
                                <TableCell className={classes.tableCellTd}>
                                    {lastName}
                                </TableCell>
                                <TableCell className={classes.tableCellTd}>
                                    {evaluationAverage}
                                </TableCell>
                                <TableCell className={classes.tableCellTd}>
                                    <Button 
                                        className={classes.button}
                                        onClick={() => handleShowDialog(id)}
                                    >Pokaż szczegóły</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        : <CircularProgress />
    )
}

UsersTable.propTypes = {
    setOpenDialog: PropTypes.func.isRequired,
    setChosenUser: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            evaluationAverage: PropTypes.number.isRequired,
            evaluationDetails: PropTypes.shape({
                supervisor: PropTypes.number.isRequired,
                me: PropTypes.number.isRequired,
                coworkers: PropTypes.number.isRequired
            })
        })
    )
}

export default UsersTable;