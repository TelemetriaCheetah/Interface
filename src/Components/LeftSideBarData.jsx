import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import { DesktopMac , DesktopMacTwoTone , Router , RouterTwoTone , DiscFullOutlined , DiscFullTwoTone, DiscFull, MapOutlined , MapTwoTone , BatteryCharging90 ,  BatteryCharging90TwoTone} from "@material-ui/icons"

const styles = 
{
    icon: 
    {
        color: "#fff",
        fontSize: 60,
    }
}

export const LeftSideBarData = 
[
    {
        icon: <IconButton><DesktopMac style={styles.icon} /></IconButton>,
        iconAlt: <IconButton><DesktopMacTwoTone style={styles.icon} /></IconButton>,
        link: "/",
    },

    {
        icon: <IconButton><Router style={styles.icon} /></IconButton>,
        iconAlt: <IconButton><RouterTwoTone style={styles.icon} /></IconButton>,
        link: "/rt-elt",
    },
    {
        icon: <IconButton><DiscFullOutlined style={styles.icon} /></IconButton>,
        iconAlt: <IconButton><DiscFullTwoTone style={styles.icon} /></IconButton>,
        link: "/rt-mec",
    },
    {
        icon: <IconButton><MapOutlined style={styles.icon} /></IconButton>,
        iconAlt: <IconButton><MapTwoTone style={styles.icon} /></IconButton>,
        link: "/rt-map",
    },
    {
        icon: <IconButton><BatteryCharging90 style={styles.icon} /></IconButton>,
        iconAlt: <IconButton>< BatteryCharging90TwoTone style={styles.icon} /></IconButton>,
        link: "/rt-pwt",
    },
]