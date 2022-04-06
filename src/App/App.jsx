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
import { TestControl } from '../Pages/TestControl';
const ENDPOINT = "http://192.168.0.3:2000";


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
    const [sensorIncomingData , setSensorIncomingData] = React.useState({SA1 : 0 , SA2: 0 , SA3: 0, SA4: 0, SA5: 0,SA6: 0,SA7: 0,SA8: 0,SA9: 0,SA10: 0,SA11: 0,SA12: 0,SA13: 0,SA14: 0,SA15: 0,SA16: 0,SA17: 0,SA18: 0,SA19: 0, SA20: 0, SA21: 0,SA22: 0,SA23: 0,SA24: 0,SA25: 0,SA26: 0,SA27: 0,SA28: 0,SA29: 0,SA30: 0,SA31: 0,SA32: 0,SA33: 0,SA34: 0,SA35: 0, SA36: 0, SA37: 0,SA38: 0,SA39: 0,SA40: 0,SA41: 0,SA42: 0,SA43: 0,SA44: 0,SA45: 0,SA46: 0,SA47: 0,SA48: 0,SA49: 0,SA50: 0,SA51: 0, SA52: 0, SA53: 0,SA54: 0,SA55: 0,SA56: 0,SA57: 0,SA58: 0,SA59: 0,SA60: 0,SA61: 0,SA62: 0,SA63: 0,SA64: 0,SA65: 0,SA66: 0,SA67: 0, SA68: 0, SA69: 0,SA70: 0,SA71: 0,SA72: 0,SA73: 0,SA74: 0,SA75: 0,SA76: 0,SA77: 0,SA78: 0,SA79: 0});

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
                        <Route exact path="/rt-test">
                            <Header titulo="Controle de Teste"></Header>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <TestControl data={sensorIncomingData}/>
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
                <Route exact path="/rt-test">
                    <LeftSideBar></LeftSideBar>
                </Route>
            </Switch>
            <Footer data={sensorIncomingData}></Footer>
            <RightSideBar></RightSideBar>
        </div>
    )
}
