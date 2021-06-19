import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'

const useStyles = makeStyles((theme) => (
{
    grid:
    {
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
        padding: 3,
        textAlign: "center",
        justifyContent: "space-between",
        //background: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadiusRight,
    },
    list:
    {
        listStyleType: "none",
        margin: 0,
        padding: 0,
    },
    div:
    {
        margin: "20px",
    },
    barraTps:
    {
        width: "100%",
        height: "44px",
        marginTop: "10px",
        borderStyle: "solid",
        borderWidth: "4px",
        borderRadius: "7px",
        zIndex: "30",
    },

    barraTpsTexto:
    {
        position: "relative",
        top: "-27px",
        zIndex: "20",
    },

    barraTpsInterior:
    {
        position: "relative",
        height: "100%",
        background: theme.palette.primary.success,
        zIndex: "10",
    }
}));

export const SliderBar5 = (props) =>
{
    const classes = useStyles();
    const [brakeColor , setBrakeColor] = React.useState("#FF00FF");

    return (
        <>
                        <Typography> <b> {props.titulo} </b> </Typography>
            <div className={classes.div}>
                {props.values.map( (value , i) => 
                {
                        return <div className={classes.barraTps}>
                                    <div className={classes.barraTpsInterior} style={{width: value.percent}} ></div>
                                    <div className={classes.barraTpsTexto}><b>{value.text} : </b> {value.value}</div>
                                </div>
                })}
            </div>
            </>
    )
}