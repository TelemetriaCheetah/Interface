import React from 'react';
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
        padding: "10px 0px 0px 0px",
        textAlign: "center",
        background: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadiusTop,
    },
    innerGrid:
    {
        position: "fixed",
        left: "0",
        top: "0",
        height: "50px",
        width: "100%",
    },
}));

export const Header = (props) => {
    const classes = useStyles();
    return (
        <div className = {classes.innerGrid}>
            <Grid container spacing={0} className = {classes.grid}>
                <Grid item xs={3}><Link to="/"><img className={classes.image} src={logoCheetah}></img></Link></Grid>
                <Grid item xs={6}><Typography className={classes.texto}> {props.titulo}</Typography></Grid>
                <Grid item xs={3}><img className={classes.image} src={logoUnifei}></img></Grid>
            </Grid>
        </div>
    )
}
