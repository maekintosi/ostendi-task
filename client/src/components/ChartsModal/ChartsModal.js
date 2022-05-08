import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import CloseIcon from '@mui/icons-material/Close';

import { PieChart, Pie, Cell } from 'recharts';

import useStyles from './styles';

const ChartsModal = ({openDialog, setOpenDialog, userData}) => {
    let data;
    const [ openModal, setOpenModal ] = useState(true);
    const classes = useStyles();
    const legendColors = [ "#0d50af", "#0a27af", "#020a72" ];

    if (!_.isEmpty(userData)) {
        data = [
            {
                name: "Moja ocena", 
                value: userData.evaluationDetails.me
            },
            {
                name: "Ocena przełożonego",
                value: userData.evaluationDetails.supervisor
            },
            {
                name: "Ocena współpracowników",
                value: userData.evaluationDetails.coworkers
            }
        ];
    }

    return (
        _.isEmpty(userData) ?
            <Dialog
                open={openModal}
                onClose={() => setOpenModal(false)}
                fullWidth
                maxWidth="lg"
            >
                <DialogTitle className={classes.modalTitle}>
                    Uwaga!
                </DialogTitle>
                <DialogContent className={classes.modalContent}>
                    <p className={classes.warningText}>
                        Wskazany rekord nie istnieje w naszej bazie.
                    </p>
                </DialogContent>
                <DialogActions className={classes.modalActions}>
                    <Button 
                        className={classes.closeButton}
                        onClick={() => setOpenModal(false)}
                    >
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>
            : <Dialog
            open={openDialog}
            fullWidth
            maxWidth="lg"
        >
            <DialogTitle className={classes.modalTitle}>
               {userData.firstName} {userData.lastName} 
                <IconButton onClick={() => setOpenDialog(false)}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.modalContent}>
                <div className={classes.blueCard}>
                    <span>Wynik sumaryczny</span>
                    <span className={classes.targetWeight}>{`${userData.evaluationAverage}%`}</span>
                </div>
                <Grid container>
                    <Grid item xs={6}>
                        <ul className={classes.dataLegend}>
                            <li className={classes.dataLegend__item}>
                                <div 
                                    className={classes.dataLegend__item__circle}
                                    style={{backgroundColor: legendColors[0]}}
                                /> Moja ocena
                            </li>
                            <li className={classes.dataLegend__item}>
                                <div 
                                    className={classes.dataLegend__item__circle}
                                    style={{backgroundColor: legendColors[1]}}
                                /> Ocena przełożonego
                            </li>
                            <li className={classes.dataLegend__item}>
                                <div 
                                    className={classes.dataLegend__item__circle}
                                    style={{backgroundColor: legendColors[2]}}
                                /> Ocena współpracowników
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6}>
                        <PieChart width={250} height={250}>
                            <Pie
                                data={data}
                                cx={150}
                                cy={150}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={legendColors[index % legendColors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions className={classes.modalActions}>
                <Button
                    className={classes.closeButton} 
                    onClick={() => setOpenDialog(false)}
                >
                    Zamknij
                </Button>
            </DialogActions>
        </Dialog>
    )
}

ChartsModal.propTypes = {
    openDialog: PropTypes.bool.isRequired,
    setOpenDialog: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired
};

export default ChartsModal;