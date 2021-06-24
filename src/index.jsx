import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';
import { createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core'
import Montserrat from './fonts/Montserrat/Montserrat-Regular.ttf'
import { BrowserRouter as Router} from "react-router-dom"


const cheetahGradient = "linear-gradient(0deg, rgba(252,41,96,1) 0%, rgba(255,84,44,1) 100%)"

const theme = createMuiTheme({
    palette: {
        // background:
        // {
        //     default: "linear-gradient(45deg, #fc2960 0%, #ff542c 100%)",
        // },
        primary: {
            light: '#ff0000',
            main: '#FF00FF',
            dark: '#0000FF',
            contrastText: '#000',
            success: cheetahGradient,
            fail: "#444",
        },
        secondary: {
            light: '#000000',
            main: 'rgba(0, 0, 0, 0.45)',
            dark: '#ba000d',
            contrastText: '#000',
        },
        text:
        {
            primary: '#fff',
            secondary: '#000'
        }
        },
        typography:
        {
            fontFamily: 'Montserrat',
            fontWeight: "Normal",
            fontSizeTitle: "25px"
        },
        shape:
        {
            borderRadius: "20px",
            borderRadiusTop: "0 0 20px 20px",
            borderRadiusBottom: "20px 20px 0 0",
            borderRadiusLeft: "0 20px 20px 0",
            borderRadiusRight: "20px 0 0 20px",
        },
        overrides: {
            MuiCssBaseline: {
              "@global": {
                body: {
                  backgroundImage:
                    "url(src/images/skyline.png)"
                }
              }
            }
          },
  });

ReactDOM.render(<ThemeProvider theme={theme}><Router><CssBaseline /><App /> </Router> </ThemeProvider> , document.getElementById('root'));