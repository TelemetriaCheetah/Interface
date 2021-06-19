import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import WheelImage from "../images/vel_arthur.png";
import SpeedPointer from "../images/ponteiro2.png";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:2000";

const useStyles = makeStyles((theme) => (
{
    div:
    {
        direction: "column",
        position:"relative",
        justifyContent: "center",
        alignContent: "center",
        backgroundImage:  `url(${WheelImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "400px",
    },
    img2:
    {
        height: "380px",
        position: "relative",
        // top: "40px",
        //left: "5px",
        opacity: "1",
        // transformOrigin: "100% 100%",
        // display: "inline-block",
    },
}));



export const Speed = (props) =>
{
    const classes = useStyles();
    let turn_wheel = 
    {
        transform: "rotate("+ -135 +"deg)"
    }
    return (
            <>
            <div className={classes.div}>
                <img src={SpeedPointer} className={classes.img2} style={turn_wheel}/> 
            </div>
            <Typography> <b> Rotação:  </b> {props.rotacao} º</Typography>
            </>
    )
}