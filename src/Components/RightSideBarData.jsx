import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import {Schedule , SignalCellular0Bar , SignalCellular1Bar , SignalCellular2Bar , SignalCellular3Bar , SignalCellular4Bar} from "@material-ui/icons"
import Air from "../Graphics/Air"

const styles = {
    icon: 
    {
        color: "#fff",
        fill:"#ffffff",
        fontSize: 50,
    },
    img:
    {
        width: "50px",
    },
}

var signalRSSI = 0;
var signalRTT = 0;

export const RightSideBarData = 
[

    {
        icon: <SignalCellular3Bar style={styles.icon} />,
        text: <div><b> RSSI: </b> <br /> {signalRSSI} dBm  <b> RTT:  </b>  <br /> {signalRTT} ms </div>,
    },

    {
        icon: <Schedule style={styles.icon} />,
        text: <div><b>Uptime: </b> <br /> 0s</div>,
    },

    {
        icon: <IconButton><Air style={styles.img} /></IconButton>,
        text: <div><b>Abrir AIRs</b></div>
    },
]