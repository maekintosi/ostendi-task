import React from 'react';

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

export default function ChartsModal({openDialog, setOpenDialog, userData}) {
    const classes = useStyles();

    // const data ={
    //     evaluationDetails: {
    //         supervisor: 60,
    //         me: 50,
    //         coworkers: 40,
    //     }
    // };

    const data = [
        { name: "Moja ocena", value: userData.evaluationDetails.me },
        { name: "Ocena przełożonego", value: userData.evaluationDetails.supervisor },
        { name: "Ocena współpracowników", value: userData.evaluationDetails.coworkers }
    ];
    const legendColors = ["#0d50af", "#0a27af", "#020a72"];

    return (
        <Dialog
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
                        <p>
                            Legenda
                        </p>
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
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx={120}
                                cy={200}
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
            <DialogActions>
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
