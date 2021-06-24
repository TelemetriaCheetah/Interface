import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import Accel from "../images/acel.png";

const useStyles = makeStyles((theme) => (
{
    div:
    {
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "left", 
    },
    img:
    {
        height: "140px",
        width: "140px",
        position: "relative",
        top: "-10px",
        //right: "10px",
        //bottom: "10px",
    },
    dot:
    {
        height: "25px",
        width: "25px",
        backgroundColor: "red",
        borderRadius: "50%",
        display: "inline-block",
        position: "relative",
    }
}));

export const IMU = (props) =>
{
    const classes = useStyles();
    const [brakeColor , setBrakeColor] = React.useState("#FF00FF");

    return (
        <>
        <Typography> <b> {props.titulo} </b> </Typography>
            <div className={classes.div}>
            
                <div><img src={Accel} className={classes.img}/></div>
                <Typography> <b> AccelX: </b> {props.accelX} m/s²</Typography>
                <Typography> <b> AccelY: </b> {props.accelY} m/s² </Typography>

            </div>
            <div className={classes.dot} style={{top : -166 + props.accelX*5 , left: 0 + props.accelY*3}}></div>
            
        </>
    )
}