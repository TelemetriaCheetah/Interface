import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import logoUnifei from '../images/unifei.png';
import logoCheetah from '../images/logo.png';
import { Button, Grid, Typography} from '@material-ui/core'
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
    },
    botao:
    {
        background: theme.palette.primary.success,
        margin: "5px",
    },
    innerControl:
    {
        display: "flex",
        flexDirection: "column",
    }
}));

function percentify(n)
{
    return n.toString(10) + "%";
}

export const TestControl  = (props) => {
    const classes = useStyles();
    const [sensorIncomingData , setSensorIncomingData] = React.useState(props.data);

    useEffect(() => 
    {
        setSensorIncomingData(props.data);
    }, [props.data]);

      var texto = 
      [
          {
              text: "Teste Atual",
              value: sensorIncomingData.SA1 + "",
          },
          {
              text: "ID",
              value: sensorIncomingData.SA1 + "",
          },
          {
              text: "Localização",
              value: sensorIncomingData.SA1 + "",
          },
          {
              text: "Duração",
              value: sensorIncomingData.SA1 + "",
          },
          {
              text: "Responsável",
              value: sensorIncomingData.SA1 + "",
          },
          {
              text: "Data",
              value: sensorIncomingData.SA1 + "",
          },
      ]

    return (
        <Grid container spacing={0} className = {classes.grid} >
            <Grid item xs={3} ><SimpleText titulo={""} values={texto} ></SimpleText></Grid>
            <Grid item xs={3} className = {classes.innerControl}>
                <Button className={classes.botao}>Iniciar Teste</Button>
                <Button className={classes.botao}>Carregar CSV</Button>
                <Button className={classes.botao}>Exportar CSV</Button>
            </Grid>
            <Grid item xs={3} className = {classes.innerControl}>
                <Button className={classes.botao}>Carregar do banco</Button>
                <Button className={classes.botao}>Verificar dados</Button>
                <Button className={classes.botao}>Testando</Button>
            </Grid>
        </Grid>
    )
}
