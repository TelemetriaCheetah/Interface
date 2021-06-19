import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, StylesProvider, Typography , IconButton} from '@material-ui/core'
import { Switch , Route , Link } from "react-router-dom";
import ReactMapGL, { Marker } from "react-map-gl";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:2000";

const useStyles = makeStyles((theme) => ({
    info:
    {
        width: "200px",
        height: "200px",
        // background: "white",
        position: "absolute",
        left: "180px",
        top: "50px",
        display: "flex",
        flexDirection: "column",
    },
    dot:
    {
        height: "15px",
        width: "15px",
        backgroundColor: "white",
        borderRadius: "50%",
        display: "inline-block",
        position: "relative",
    },
}));



export const TrackMap = (props) =>
{
    const classes = useStyles();

    const [sensorIncomingData , setSensorIncomingData] = React.useState({SA1 : 0 , SA2: 0 , SA74 : 0 , SA76: 0 , SA78: 0 , SA79: 0 , SA4: 0, SA8: 8, SA9:0 , SA22:0 ,SA17:-22.40743 , SA18: -45.43600});

    useEffect(() => 
    {
        const socket = socketIOClient(ENDPOINT);
        socket.on("cheetah_server", data => {
          setSensorIncomingData(data);
        });
      }, []);
    
    const [viewport , setViewport] = useState(
        {
            latitude: -22.40743,
            longitude: -45.43600,
            width: props.width,
            height: props.height,
            zoom:17,
        }
    )

    const InfoWidget = () =>
    {
        if(props.showInfo==1)
            return (            
                <div className={classes.info}>
                    <Typography><b>Número de satélites:</b></Typography>
                    <Typography> 0 </Typography>
                    <Typography><b>Velocidade:</b></Typography>
                    <Typography> 0 km\h </Typography>
                    <Typography><b>HDOP:</b></Typography>
                    <Typography> 0,0 </Typography>
                </div>
            )
        else
            return <></>
    }
    
    return (
        <>
            <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiY2Fpb3RiYyIsImEiOiJja3EweWdqNHgwOW13MnVxZ2diY3ZpazFwIn0.SLwlAOXFaWuXB9CZUaShEg"
                mapStyle="mapbox://styles/caiotbc/ckq13v75k1yyi17mp4yxngpzq"
                onViewportChange = {(viewport) => {setViewport(viewport)}}
            >
                <Marker latitude={sensorIncomingData.SA17} longitude={sensorIncomingData.SA18}>
                    <div className={classes.dot} ></div>
                </Marker>
            </ReactMapGL>
            <InfoWidget></InfoWidget>
        </>
    ) 
}