import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import GaugeBack from "../images/tempGaugeBack60.png";
import GaugePointer from "../images/ponteiroBranco.png";

const useStyles = makeStyles((theme) => (
{
    grid:
    {
        marginTop: "10px",
        display: "grid",
        gridGap: "40px",
        gridTemplateColumns: "1fr 1fr",
        gridAutoRows: "90px",
    },
    temp:
    {
        backgroundImage:  `url(${GaugeBack})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "60px",
    },
    img:
    {
        zIndex: 2,
        height: "120px",
        position: "relative",
    },
}));

export const Temperature = (props) =>
{
    const classes = useStyles();
    const [brakeColor , setBrakeColor] = React.useState("#FF00FF");
    let turn_wheel = 
    {
        transform: "rotate("+ -85 +"deg)"
    }

    return (
        <>
        {/* <Typography> <b> {props.titulo} </b> </Typography> */}
            <div className={classes.grid}>
                <div className={classes.temp}>
                    <img className={classes.img} src={GaugePointer} style={turn_wheel}></img>
                    <Typography style={{"position":"relative", "top":"-60px"}}><b>Bateria HV :</b> <br /> 0 C (Min)</Typography>
                </div>
                <div className={classes.temp}>
                    <img className={classes.img} src={GaugePointer} style={turn_wheel}></img>
                    <Typography style={{"position":"relative", "top":"-60px"}}><b>Bateria HV :</b> <br /> 0 C (Máx)</Typography>
                </div>
                <div className={classes.temp}>
                    <img className={classes.img} src={GaugePointer} style={turn_wheel}></img>
                    <Typography style={{"position":"relative", "top":"-60px"}}><b>Bateria LV :</b> <br /> 0 C</Typography>
                </div>
                <div className={classes.temp}>
                    <img className={classes.img} src={GaugePointer} style={turn_wheel}></img>
                    <Typography style={{"position":"relative", "top":"-60px"}}><b>Interior ACC :</b> <br /> 0 C </Typography>
                </div>
                <div className={classes.temp}>
                    <img className={classes.img} src={GaugePointer} style={turn_wheel}></img>
                    <Typography style={{"position":"relative", "top":"-60px"}}><b>FET 1:</b> <br /> 0 C </Typography>
                </div>
                <div className={classes.temp}>
                    <img className={classes.img} src={GaugePointer} style={turn_wheel}></img>
                    <Typography style={{"position":"relative", "top":"-60px"}}><b>FET 2:</b> <br /> 0 C </Typography>
                </div>
            </div>
        </>
    )
}