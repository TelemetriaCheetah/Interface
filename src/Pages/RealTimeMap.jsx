import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography , Button} from '@material-ui/core';
import { TrackMap } from "../Components/Map";

const useStyles = makeStyles((theme) => ({
    grid:
    {
        padding: "10px",
        textAlign: "center",
        background: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        height: "612px",
    }, 
}));

export const RealTimeMap = () => 
{
    const classes = useStyles();
    return (
        <Grid container spacing={0} className = {classes.grid}>
            <TrackMap showInfo={1} width={"100%"} height={"100%"}></TrackMap>
        </Grid>
    ) 
}
