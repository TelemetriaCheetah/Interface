import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import { RightSideBarData } from "./RightSideBarData";

const useStyles = makeStyles((theme) => ({
    grid:
    {
        position: "fixed",
        height: "80%",
        top:"80px",
        right: 0,
        width: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 50,
        textAlign: "center",
        background: theme.palette.secondary.main,
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
        padding: 5,
    },
}));

export const RightSideBar = (props) =>
{
    const classes = useStyles();
    return (
        <div className={classes.grid}>
            <ul className={classes.list}>
            {RightSideBarData.map( (icon , i) => 
            {
                    return <li className={classes.innerList}
                    key={i}> 
                    {icon.icon}
                    {icon.text}
                    </li>
            })}
            </ul>
        </div>
    )
}
