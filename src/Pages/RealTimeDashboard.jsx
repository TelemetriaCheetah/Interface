import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import logoUnifei from '../images/unifei.png';
import logoCheetah from '../images/logo.png';
import { Grid, Typography} from '@material-ui/core'
import { Speed } from "../Components/Speedometer";
import { SliderBar5 } from "../Components/SliderBar5";

import socketIOClient from "socket.io-client";
import { TrackMap } from '../Components/Map';
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
        direction: "column",
        alignItems: "center",
        alignContent: "center",
        height: "612px",
        justify: "center",
        padding: "30px",
        textAlign: "center",
        background: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
    }
}));

function percentify(n)
{
    return n.toString(10) + "%";
}

export const RealTimeDashboard  = () => {
    const classes = useStyles();
    const [sensorIncomingData , setSensorIncomingData] = React.useState({SA1 : 0 , SA2: 0 , SA74 : 0 , SA76: 0 , SA78: 0 , SA79: 0 , SA4: 0, SA8: 8, SA9:0 , SA22:0 ,SA17:-22.40743 , SA18: -45.43600});

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

    return (
        <Grid container spacing={0} className = {classes.grid} >
            <Grid item xs={3} ><TrackMap showInfo={0} width={"100%"} height={"250px"}></TrackMap></Grid>
            <Grid item xs={6} ><Speed titulo={"Encoder Volante"} rotacao={sensorIncomingData.SA16}></Speed></Grid>
            <Grid item xs={3} ><SliderBar5 titulo={""} values={sensorValues} ></SliderBar5></Grid>
        </Grid>
    )
}
