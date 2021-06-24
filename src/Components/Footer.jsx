import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import logoUnifei from '../images/unifei.png';
import logoCheetah from '../images/logo.png';
import { Grid, Typography} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";

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
        //marginTop: "calc(5% + 60px)",
        padding: "10px 0px 0px 0px",
        textAlign: "center",
        background: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadiusBottom,
    },
    innerGrid:
    {
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "50px",
        width: "100%",
    },
}));

export const Footer = (props) => {
    const classes = useStyles();
    const [sensorIncomingData , setSensorIncomingData] = React.useState(props.data);

    useEffect(() => 
    {
        setSensorIncomingData(props.data);
    }, [props.data]);

    return (
        <div>
            <div className = {classes.innerGrid}>
                <Grid container spacing={0} className = {classes.grid}>
                    <Grid item xs={3}><b>MySQL:</b> Conectado</Grid>
                    <Grid item xs={3}><b>ID Teste:</b> 23</Grid>
                    <Grid item xs={3}><b>Usuário:</b> Caio Tácito</Grid>
                    <Grid item xs={3}><b>TS:</b> 2021-04-27-23-37-42</Grid>
                    <Grid item xs={3}><b>Volta atual:</b> {sensorIncomingData.SA80} </Grid>
                    <Grid item xs={3}><b>Última volta:</b> 7:23:95 </Grid>
                    <Grid item xs={3}><b>Diferença:</b> 4:24:22</Grid>
                    <Grid item xs={3}><b>Volta mais rápida:</b> 7:23:95</Grid>
                </Grid>
            </div>
        </div>
    )
}
