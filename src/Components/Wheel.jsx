import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import WheelImage from "../images/wheel.png";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:2000";

const useStyles = makeStyles((theme) => (
{
    div:
    {
        display: "flex",
        margin: "20px",
        justifyContent: "center",
    },
    img1:
    {
        width: "150px",
        position: "relative",
        //left: "5px",
    },
    img2:
    {
        width:"150px",
        position: "relative",
        //top: "-215px",
        //left: "5px",
        opacity: "0.7",
    },
}));



export const Wheel = (props) =>
{
    const classes = useStyles();
    let turn_wheel = 
    {
        transform: "rotate("+props.rotacao+"deg)"
    }
    return (
            <>
            <Typography> <b> {props.titulo} </b> </Typography>
                <br /> 
            <div className={classes.div}>
               <img src={WheelImage} className={classes.img1} style={turn_wheel}/>
            </div>

            <Typography> <b> Rotação:  </b> {props.rotacao} º</Typography>
            </>
    )
}