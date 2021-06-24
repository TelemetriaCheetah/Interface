import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import logoUnifei from '../images/unifei.png';
import logoCheetah from '../images/logo.png';
import { Grid, Typography , Button} from '@material-ui/core'
import { LogicStateToggle5 } from "../Components/LogicStateToggle5"
import { BrakeTemp } from "../Components/BrakeTemp";
import { Graph } from "../Components/Graph";
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
        //height: "612px",
    }
}));


var qtd =1;
export const RealTimeElectronics = () => 
{
    const classes = useStyles();
    const [sensorIncomingData , setSensorIncomingData] = React.useState({SA1 : 0 , SA2: 0 , SA74 : 0 , SA76: 0 , SA78: 0 , SA79: 0 , SA4: 0, SA8: 8, SA9:0 , SA22:0 ,SD1:0 ,SD2:0 , SD17:0});

    useEffect(() => 
    {
        const socket = socketIOClient(ENDPOINT);
        socket.on("cheetah_server", data => {
          setSensorIncomingData(data);
        });
      }, []);
    

    var toggles = 
    [
        {
            text: <Typography>Inertia: </Typography> ,
            state: sensorIncomingData.SD1,
        },
        {
            text: <Typography>BOTS: </Typography> ,
            state: sensorIncomingData.SD2
        },
        {
            text: <Typography>Botão Frontal: </Typography> ,
            state: sensorIncomingData.SD17
        },
        {
            text: <Typography>Botão Esquerdo: </Typography> ,
            state: 0
        },
        {
            text: <Typography>Botão Direito: </Typography> ,
            state: 0
        },
    ]
    var toggles4 = 
    [
        {
            text: <Typography>TSMS: </Typography> ,
            state: sensorIncomingData.SD1,
        },
        {
            text: <Typography>Interlock HVD: </Typography> ,
            state: sensorIncomingData.SD2
        },
        {
            text: <Typography>Interlock Bateria: </Typography> ,
            state: sensorIncomingData.SD17
        },
        {
            text: <Typography>BMS: </Typography> ,
            state: 0
        },
        {
            text: <Typography>IMD: </Typography> ,
            state: 0
        },
    ]

    var toggles2 = 
    [
        {
            text: <Typography>Relés de isolação: </Typography> ,
            state: sensorIncomingData.SD1,
        },
        {
            text: <Typography>Latch IMD: </Typography> ,
            state: sensorIncomingData.SD2
        },
        {
            text: <Typography>Latch BSPD: </Typography> ,
            state: sensorIncomingData.SD17
        },
        {
            text: <Typography>Latch BMS: </Typography> ,
            state: 0
        },
        {
            text: <Typography>Self Test: </Typography> ,
            state: 0
        },
        {
            text: <Typography>Estado CS: </Typography> ,
            state: 0
        },
    ]

    var toggles3 = 
    [
        {
            text: <Typography>Setpoint Hall: </Typography> ,
            state: sensorIncomingData.SD1,
        },
        {
            text: <Typography>Setpoint Cebolinha: </Typography> ,
            state: sensorIncomingData.SD2
        },
        {
            text: <Typography>PWM IMD: </Typography> ,
            state: sensorIncomingData.SD17
        },
        {
            text: <Typography>Última Falha: </Typography> ,
            state: 0
        },
        {
            text: <Typography>Código de erro: </Typography> ,
            state: 0
        },
        {
            text: <Typography>Shutdown: </Typography> ,
            state: 0
        },
    ]

    var toggles5 = 
    [
        {
            text: <Typography>CS: </Typography> ,
            state: sensorIncomingData.SD1,
        },
        {
            text: <Typography>Tele Traseira: </Typography> ,
            state: sensorIncomingData.SD2
        },
        {
            text: <Typography>Tele Frontal: </Typography> ,
            state: sensorIncomingData.SD17
        },
        {
            text: <Typography>Display LCD: </Typography> ,
            state: 0
        },
        {
            text: <Typography>PCB Inversor (LV): </Typography> ,
            state: 0
        },
    ]

    var toggles6 = 
    [
        {
            text: <Typography>PCB Inversor (HV): </Typography> ,
            state: sensorIncomingData.SD1,
        },
        {
            text: <Typography>PCB Rodas 1: </Typography> ,
            state: sensorIncomingData.SD2
        },
        {
            text: <Typography>PCB Rodas 2: </Typography> ,
            state: sensorIncomingData.SD17
        },
        {
            text: <Typography>PCB Rodas 3: </Typography> ,
            state: 0
        },
        {
            text: <Typography>PCB Rodas 4: </Typography> ,
            state: 0
        },
    ]

    let drawCards = () => 
    {
      return <>
      <Grid item xs={3}><LogicStateToggle5 titulo={"Circuito de Desligamento"} values={toggles} /> </Grid>
      <Grid item xs={3}><LogicStateToggle5 titulo={"Circuito de Desligamento"} values={toggles4} /> </Grid>
      <Grid item xs={3}><LogicStateToggle5 titulo={"Circuito de Segurança"} values={toggles2} /> </Grid>
      <Grid item xs={3}><LogicStateToggle5 titulo={"Circuito de Segurança"} values={toggles3} /> </Grid>
      <Grid item xs={3}><LogicStateToggle5 titulo={"Telemetria"} values={toggles5} /> </Grid>
      <Grid item xs={3}><LogicStateToggle5 titulo={"Telemetria"} values={toggles6} /> </Grid>
      <Grid item xs={6} ><Graph titulo={"Gráfico"} height={"280px"} temp={sensorIncomingData.SA76}></Graph></Grid>
         </>
  }

    return (
        <Grid container spacing={0} className = {classes.grid}>
            {drawCards()}
        </Grid>
    ) 
}
