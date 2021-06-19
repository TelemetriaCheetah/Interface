import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

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
    innerList:
    {

    },
    toggleSuccess:
    {
        background: theme.palette.primary.success,
        fontWeight: "bold",
        textAlign: "center",
        width: "60px",
        height: "20px",
        borderRadius: "10px",
    },
    toggleFail:
    {
        background: theme.palette.primary.fail,
        fontWeight: "bold",
        textAlign: "center",
        width: "60px",
        height: "20px",
        borderRadius: "10px",
    },
    div:
    {
        margin: "20px",
    },
}));

export const LogicStateToggle5 = (props) =>
{
    const classes = useStyles();
    return (
            <div className={classes.div}>
                <Typography> <b> {props.titulo} </b> </Typography>
                <br />
                <ul className={classes.list}>
                    {props.values.map( (value , i) => 
                    {
                        return <li className={classes.innerList}
                        key={i}> 
                            <div className={classes.grid}>
                                <div>{value.text}</div>
                                {
                                    (value.state ? <div className={classes.toggleSuccess}>OK</div> : <div className={classes.toggleFail}>FALHA</div>)
                                }
                            </div>
                        </li>
                    })}
                </ul>
            </div>
    )
}