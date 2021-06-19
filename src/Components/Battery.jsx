import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import BatteryIcon from "../images/bateria.svg"

const useStyles = makeStyles((theme) => (
{
    grid:
    {
        display: "grid",
        gridGap: "0px",
        gridTemplateColumns: "80px 100px",
        gridAutoRows: "40px",
    },
    img:
    {
        zIndex: 2,
        height: "140px",
        position: "relative",
    },
    interior:
    {
        position: "relative",
        left: "25px",
        bottom: "13px",
        height: "110px",
        width: "43px",
        background: theme.palette.primary.success,
        zIndex: 1,
        transform: "rotatex(180deg)",
        transformOrigin: "top",
    },
    in:
    {
        gridRow: "1 / span 4",
    }
}));

export const Battery = (props) =>
{
    const classes = useStyles();
    const [brakeColor , setBrakeColor] = React.useState("#FF00FF");

    return (
        <>
        <Typography> <b> {props.titulo} </b> </Typography>
            <div className={classes.grid}>
                <div className={classes.in}>
                    <div ><img className={classes.img} src={BatteryIcon}></img></div>
                    <div className={classes.interior}></div>
                </div>
                <span><b>SOC:</b> <br /> 35 %</span>
                <span><b>Tensão:</b> <br />60V</span>
                <span><b>Carga:</b> <br /> 32Ah</span>
                <span><b>Corrente:</b> <br /> -12A</span>
            </div>
        </>
    )
}