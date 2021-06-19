import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import WheelImage from "../images/wheel.png";
import socketIOClient from "socket.io-client";
import Chart from 'react-apexcharts'

const ENDPOINT = "http://127.0.0.1:2000";

const useStyles = makeStyles((theme) => (
{
    div:
    {
        display: "flex",
        margin: "20px",
        justifyContent: "center",
    },
    img1:
    {
        width: "150px",
        position: "relative",
        //left: "5px",
    },
    img2:
    {
        width:"150px",
        position: "relative",
        //top: "-215px",
        //left: "5px",
        opacity: "0.7",
    },
}));

let vetor = [0,1];

export const Graph2 = (props) =>
{
    const classes = useStyles();


    if(vetor.length <= 30)
    {
        vetor.push(props.temp);
    }
    else
    {
        vetor.shift();
        vetor.push(props.temp);
    }

    var state = {
        options: {
          chart: {
            id: 'apexchart-example',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                  speed: 1000
                }
              },
          },
          xaxis: {
            categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
          },
          yaxis: {
            max: 260
          },
        },
        series: [{
          name: 'series-1',
          data: vetor,
        }]
      }
    return (
            <>
            <Typography> <b> {props.titulo} </b> </Typography>
            <div className={classes.div}>
            <Chart options={state.options} series={state.series} type="line" height={220} />
            </div>
            </>
    )
}