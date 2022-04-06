import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import logoUnifei from '../images/unifei.png';
import logoCheetah from '../images/logo.png';
import { Grid, Typography} from '@material-ui/core'
import { Speed } from "../Components/Speedometer";
import { SliderBar5 } from "../Components/SliderBar5";
import { Battery } from '../Components/Battery';
import { Temperature } from '../Components/Temperature6';
import { SimpleText } from '../Components/SimpleText';
import { Graph } from "../Components/Graph";

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
        // alignItems: "center",
        // alignContent: "center",
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

export const RealTimePowertrain  = (props) => {
    const classes = useStyles();
    const [sensorIncomingData , setSensorIncomingData] = React.useState(props.data);

    useEffect(() => 
    {
        setSensorIncomingData(props.data);
    }, [props.data]);

      var sensorValues = 
      [
          {
              text: "TPS 1",
              value: sensorIncomingData.SA1 + "%",
              percent: percentify(sensorIncomingData.SA1),
          },
          {
              text: "TPS 2",
              value: sensorIncomingData.SA76 + " PSI",
              percent: percentify(sensorIncomingData.SA2),
          },
          {
              text: "Pressão do Freio",
              value: sensorIncomingData.SA74+ " PSI",
              percent: percentify(sensorIncomingData.SA76/10),
          },
          {
              text: "RPM",
              value: sensorIncomingData.SA74+ " ",
              percent: percentify(sensorIncomingData.SA74/10),
          },
          {
              text: "Torque",
              value: sensorIncomingData.SA74+ " Nm",
              percent: percentify(sensorIncomingData.SA74/10),
          },
          {
              text: "Tensão de saída",
              value: sensorIncomingData.SA74+ " V",
              percent: percentify(sensorIncomingData.SA74/10),
          },
      ]

      var textoInversor = 
      [
          {
              text: "Tensão de saída BMS",
              value: sensorIncomingData.SA32 + "V",
          },
          {
              text: "Frequência",
              value: sensorIncomingData.SA58 + "Hz",
          },
          {
              text: "Estado",
              value: sensorIncomingData.SA59 + "",
          },
          {
              text: "Alarme",
              value: sensorIncomingData.SA67 + "",
          },
          {
              text: "Falha atual:",
              value: sensorIncomingData.SA68 + "",
          },
          {
              text: "Falha anterior:",
              value: sensorIncomingData.SA69 + "",
          },
      ]

      var textoBMS = 
      [
          {
              text: "12V BMS",
              value: sensorIncomingData.SA52 + "V",
          },
          {
              text: "Fan Speed",
              value: sensorIncomingData.SA51 + "RPM",
          },
          {
              text: "Tensão máxima",
              value: sensorIncomingData.SA42 + "V",
          },
          {
              text: "Tensão mínima",
              value: sensorIncomingData.SA43 + "V",
          },
          {
              text: "Maior resistência",
              value: sensorIncomingData.SA45 + "Ω",
          },
          {
              text: "Menor resistência",
              value: sensorIncomingData.SA46 + "Ω",
          },
          {
              text: "Isolação",
              value: sensorIncomingData.SA53 + "",
          },
      ]

    return (
        <Grid container spacing={0} className = {classes.grid} >
            <Grid item xs={3} ><Battery titulo={"Bateria HV"} values={sensorValues} ></Battery></Grid>
            <Grid item xs={3} ><SimpleText titulo={""} values={textoInversor} ></SimpleText></Grid>
            <Grid item xs={3} ><SimpleText titulo={""} values={textoBMS} ></SimpleText></Grid>
            <Grid item xs={3} ><Battery titulo={"Bateria LV"} values={sensorValues} ></Battery></Grid>
            <Grid item xs={3} ><Temperature titulo={"Temperaturas"} values={sensorValues} ></Temperature></Grid>
            <Grid item xs={6} ><Graph titulo={"Gráfico"} height={"330px"} temp={sensorIncomingData.SA1} temp2={sensorIncomingData.SA76}></Graph></Grid>
            <Grid item xs={3} ><SliderBar5 titulo={""} values={sensorValues} ></SliderBar5></Grid>
        </Grid>
    )
}
