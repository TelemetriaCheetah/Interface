import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import logoUnifei from '../images/unifei.png';
import logoCheetah from '../images/logo.png';
import { Grid, Typography , Button} from '@material-ui/core'
import { LogicStateToggle5 } from "../Components/LogicStateToggle5"
import { BrakeTemp } from "../Components/BrakeTemp"
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
            text: <Typography>Botão frontal: </Typography> ,
            state: sensorIncomingData.SD17
        },
        {
            text: <Typography>placeholder: </Typography> ,
            state: 0
        },
        {
            text: <Typography>lorem ipsum: </Typography> ,
            state: 0
        },
        {
            text: <Typography>placeholder: </Typography> ,
            state: 0
        },
        {
            text: <Typography>placeholder: </Typography> ,
            state: 0
        },
    ]

    let drawCards = () => 
    {
    return <>{Array.from(Array(qtd), (e, i) => 
    {
      return <Grid key={i} item xs={3}><LogicStateToggle5 titulo={"Circuito de Desligamento TESTE"} values={toggles} /> </Grid>
    })}
    </>
  }

    return (
        <Grid container spacing={0} className = {classes.grid}>
            {drawCards()}
        </Grid>
    ) 
}
