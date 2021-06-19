import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import logoUnifei from '../images/unifei.png';
import logoCheetah from '../images/logo.png';
import { Grid, Typography , Button} from '@material-ui/core';
import { SliderBar5 } from "../Components/SliderBar5";
import { BrakeTemp } from "../Components/BrakeTemp";
import { IMU } from "../Components/IMU";
import { Wheel } from "../Components/Wheel";
import { Graph } from "../Components/Graph";
import { Graph2 } from "../Components/Graph2";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:2000";

const useStyles = makeStyles((theme) => ({
    image:
    {
        height: "50px"
    },
    texto:
    {
        padding: "5px",
        fontSize: theme.typography.fontSizeTitle,
        fontWeight: "bold" ,
        color: theme.palette.text.primary,
    },
    grid:
    {
        padding: "10px",
        textAlign: "center",
        background: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        height: "612px",
    }
}));

function percentify(n)
{
    return n.toString(10) + "%";
}

export const RealTimeMechanics = () => 
{
    const classes = useStyles();

    const [sensorIncomingData , setSensorIncomingData] = React.useState({SA1 : 0 , SA2: 0 , SA74 : 0 , SA76: 0 , SA78: 0 , SA79: 0 , SA4: 0, SA8: 8, SA9:0 , SA22:0 });

    useEffect(() => 
    {
        const socket = socketIOClient(ENDPOINT);
        socket.on("cheetah_server", data => {
          setSensorIncomingData(data);
        });
      }, []);

    var sensorValues = 
    [
        {
            text: "TPS 1",
            value: sensorIncomingData.SA1 + "%",
            percent: percentify(sensorIncomingData.SA1),
        },
        {
            text: "P. Dianteira",
            value: sensorIncomingData.SA76 + " PSI",
            percent: percentify(sensorIncomingData.SA76/10),
        },
        {
            text: "P. Traseira",
            value: sensorIncomingData.SA74+ " PSI",
            percent: percentify(sensorIncomingData.SA74/10),
        },
        {
            text: "P. Mestre 1",
            value: sensorIncomingData.SA78+ " PSI",
            percent: percentify(sensorIncomingData.SA78/10),
        },
        {
            text: "P. Mestre 2",
            value: sensorIncomingData.SA79+ " PSI",
            percent: percentify(sensorIncomingData.SA79/10),
        },
    ]

    var brakeTempValues =
    {
        SA8 : sensorIncomingData.SA8,
        SA9 : sensorIncomingData.SA9,
        SA4 : sensorIncomingData.SA4,
        SA22 : sensorIncomingData.SA22,
    }

    return (
        <Grid container spacing={0} className = {classes.grid}>
            <Grid item xs={2} ><BrakeTemp titulo={"Disco Frontal E"} temp={brakeTempValues.SA8} temp2={brakeTempValues.SA9} rotacao={brakeTempValues.SA4}></BrakeTemp></Grid>
            <Grid item xs={2} ><BrakeTemp titulo={"Disco Frontal D"} temp={brakeTempValues.SA8} temp2={brakeTempValues.SA9} rotacao={brakeTempValues.SA4}></BrakeTemp></Grid>
            <Grid item xs={2} ><BrakeTemp titulo={"Disco Traseiro E"} temp={brakeTempValues.SA8} temp2={brakeTempValues.SA9} rotacao={brakeTempValues.SA4}></BrakeTemp></Grid>
            <Grid item xs={2} ><BrakeTemp titulo={"Disco Traseiro D"} temp={brakeTempValues.SA8} temp2={brakeTempValues.SA9} rotacao={brakeTempValues.SA4}></BrakeTemp></Grid>
            <Grid item xs={4} ><SliderBar5 titulo={"Sensores "} values={sensorValues} ></SliderBar5></Grid>
            <Grid item xs={2} ><IMU titulo={"IMU"} accel={brakeTempValues.SA22}></IMU></Grid>
            <Grid item xs={3} ><Wheel titulo={"Encoder Volante"} rotacao={sensorIncomingData.SA16}></Wheel></Grid>
            <Grid item xs={7} ><Graph titulo={"Gráfico"} height={"200px"} temp={sensorIncomingData.SA76}></Graph></Grid>
            
        </Grid>
    ) 
}
