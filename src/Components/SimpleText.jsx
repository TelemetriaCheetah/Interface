import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'

const useStyles = makeStyles((theme) => (
{
    grid:
    {
        marginLeft: "20px",
        alignItems: "left",
        padding: 3,
        textAlign: "left",
        // justifyContent: "space-between",
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
        display: "grid",
        gridGap: "40px",
        gridTemplateColumns: "1fr 1fr",
        gridAutoRows: "90px",
    },
    barraTpsTexto:
    {   
        padding: "1px",
    },
}));

export const SimpleText = (props) =>
{
    const classes = useStyles();
    const [brakeColor , setBrakeColor] = React.useState("#FF00FF");

    return (
        <>
                        <Typography> <b> {props.titulo} </b> </Typography>
            <div className={classes.grid}>
                {props.values.map( (value , i) => 
                {
                        return  <>
                                    <div className={classes.barraTpsTexto}>
                                        <b>{value.text} : </b>
                                        {value.value}
                                    </div>
                                </>
                })}
            </div>
            </>
    )
}