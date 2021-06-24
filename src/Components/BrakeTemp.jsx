import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import BrakeDiscBase from "../images/discoFreioBase.png";
import BrakeDiscRotor from "../images/discoFreioMascara.png";
import socketIOClient from "socket.io-client";
import { FullscreenExitTwoTone } from '@material-ui/icons';
const ENDPOINT = "http://127.0.0.1:2000";

const useStyles = makeStyles((theme) => (
{
    div:
    {
        display: "flex",
        margin: "20px",
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
        left: "-150px",
        opacity: "0.7",
    },
}));


function convertRange(value, oldRange, newRange) 
{
    return Math.floor(((value - oldRange.min) * (newRange.max - newRange.min)) / (oldRange.max - oldRange.min) + newRange.min);
}

function tempToColor(temp)
{
    const oldRange = 
    {
        min: 0,
        max: 980,
    };

    const newRange = 
    {
        min: 0,
        max: 125,
    }

    let corDec = convertRange(temp, oldRange, newRange);

    return "hue-rotate(" + (125 - corDec).toString(10) + "deg)";
}

export const BrakeTemp = (props) =>
{
    const classes = useStyles();
    return (
            <>
            <Typography> <b> {props.titulo} </b> </Typography>
                <br /> 
            <div className={classes.div}>
               <img src={BrakeDiscBase} className={classes.img1}/>
               <img src={BrakeDiscRotor} className={classes.img2} style={{filter: tempToColor(props.temp)}}/>
            </div>
            <Typography> <b> Temp. Centro:  </b> {props.temp} ºC</Typography>
            <Typography> <b> Temp. Borda:  </b> {props.temp2} ºC</Typography>
            <Typography> <b> Rotação:  </b> {props.rotacao} RPM</Typography>
            </>
    )
}