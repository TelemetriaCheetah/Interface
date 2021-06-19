import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import WheelImage from "../images/wheel.png";
import socketIOClient from "socket.io-client";
import { Line } from 'react-chartjs-2';

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

export const Graph = (props) =>
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

    const data = (canvas) => {
        const ctx = canvas.getContext('2d')
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);gradientStroke.addColorStop(0, "rgba(252,41,96,1)");gradientStroke.addColorStop(1, "rgba(255,84,44,1)");

        return {
            labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            datasets: [{
            label: props.titulo,
            fill: 'true',
            backgroundColor: gradientStroke,
            borderColor: "#fff",
            data: vetor,
            }]
        }
      };
      
      const options = 
      {
        responsive: true,
        maintainAspectRatio: false,
        scales:
        {
          y: 
            {
            suggestedMax: 1000,
            ticks: 
            {
                fontSize: 16, 
                fontFamily: "'Roboto', sans-serif", 
                fontColor: '#fff', 
                fontStyle: '500',
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 1000
            }
        },
          xAxes: 
          [
              {
                ticks: 
                {
                    fontSize: 16,
                    fontFamily: "'Roboto', sans-serif", 
                    fontColor: '#fff',
                    fontStyle: '500',
                }
            }
        ]
        },
        animation: 
        {
            duration: 0
        }
    };

    const legend = 
    {
        display: false,
    }

    return (
            <>
            <div className={classes.div}>
                <Line data={data} options={options} height={props.height}/>
            </div>
            </>
    )
}