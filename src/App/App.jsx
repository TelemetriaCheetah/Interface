import React , { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import { Grid, Paper , Typography, Card, CssBaseline , Button } from '@material-ui/core';
import { Switch , Route , Link } from "react-router-dom";
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { RealTimeElectronics } from "../Pages/RealTimeElectronics" ;
import { RealTimeDashboard } from "../Pages/RealTimeDashboard" ;
import { RealTimeMechanics } from "../Pages/RealTimeMechanics" ;
import { RealTimeMap } from "../Pages/RealTimeMap" ;
import { RealTimePowertrain } from "../Pages/RealTimePowertrain" ;
import { LeftSideBar } from '../Components/LeftSideBar';
import { RightSideBar } from '../Components/RightSideBar';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:2000";


const useStyles = makeStyles((theme) => ({
    texto:
    {
        fontSize: theme.typography.fontSize,
    },
    main:
    {
        //backgroundImage: "url(src/images/background.png)",
        //background: ,
        padding: "0px 0px 0 0",
        overflowX: "hidden",
        overflowY: "hidden",
    },
    grid:
    {
        position: "fixed",
        top: "80px",
        margin: "0",
        padding: "0",
        border: "0",
    },
    botao:
    {
        background: theme.palette.primary.dark,
    },
    link:
    {
        color: theme.palette.text.primary,
        background: theme.palette.primary.dark,
    },
}));

export const App = () => {
    const classes = useStyles();
    const [sensorIncomingData , setSensorIncomingData] = React.useState({SA1 : 0 , SA2: 0 , SA74 : 0 , SA76: 0 , SA78: 0 , SA79: 0 , SA4: 0, SA8: 8, SA9:0 , SA22:0 ,SA17:-22.40743 , SA18: -45.43600});

    useEffect(() => 
    {
        const socket = socketIOClient(ENDPOINT);
        socket.on("cheetah_server", data => {
          setSensorIncomingData(data);
        });
      }, []);

    return (
        <div className={classes.main}>
            <Grid container spacing={0} className = {classes.grid}>
                {/* <Grid item xs={4}> <Button className={classes.botao}><Link to="/rt-elt" className={classes.link}>Esse eh um butao</Link></Button> </Grid> */}
                    <Switch>
                        <Route exact path="/">
                            <Header titulo="Dashboard"></Header>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <RealTimeDashboard />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Route>
                        <Route exact path="/rt-elt">
                            <Header titulo="Eletrônica e Telemetria"></Header>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <RealTimeElectronics />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Route>
                        <Route exact path="/rt-mec">
                            <Header titulo="Mecânica"></Header>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <RealTimeMechanics />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Route>
                        <Route exact path="/rt-map">
                            <Header titulo="Mapa"></Header>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <RealTimeMap />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Route>
                        <Route exact path="/rt-pwt">
                            <Header titulo="Powertrain"></Header>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <RealTimePowertrain data={sensorIncomingData}/>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Route>
                    </Switch>
            </Grid>
            <Switch>
                <Route exact path="/rt-elt">
                    <LeftSideBar></LeftSideBar>
                </Route>
                <Route exact path="/">
                    <LeftSideBar></LeftSideBar>
                </Route>
                <Route exact path="/rt-mec">
                    <LeftSideBar></LeftSideBar>
                </Route>
                <Route exact path="/rt-map">
                    <LeftSideBar></LeftSideBar>
                </Route>
                <Route exact path="/rt-pwt">
                    <LeftSideBar></LeftSideBar>
                </Route>
            </Switch>
            <Footer></Footer>
            <RightSideBar></RightSideBar>
        </div>
    )
}
