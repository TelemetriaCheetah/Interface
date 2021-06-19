import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import { LeftSideBarData } from "./LeftSideBarData";

const useStyles = makeStyles((theme) => ({
    grid:
    {
        position: "fixed",
        top: "80px",
        width: "30px",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 50,
        textAlign: "center",
        background: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadiusLeft,
    },
    list:
    {
        listStyleType: "none",
        margin: 0,
        padding: 0,
    }
}));

export const LeftSideBar = (props) =>
{
    const classes = useStyles();
    return (
        <div className={classes.grid}>
            <ul className={classes.list}>
            {LeftSideBarData.map( (icon , i) => 
            {
                console.log(window.location.pathname);
                if(window.location.pathname === icon.link)
                {
                    return <li
                    key={i}> 
                    <Link to={icon.link}>
                        {icon.iconAlt} 
                    </Link>
                    </li>
                }
                else
                {
                    return <li
                    key={i}> 
                    <Link to={icon.link}>
                        {icon.icon} 
                    </Link>
                    </li>
                }
            })}
            </ul>
        </div>
    )
}
