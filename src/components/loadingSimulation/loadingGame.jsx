//Das Laden stammt aus einem Template von Material UI. https://mui.com/material-ui/react-progress/#DelayingAppearance.js
import './loadingGame.css'
import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';


export default function LoadingGame() {
    const [query, setQuery] = React.useState('idle');
    const [query2, setQuery2] = React.useState('idle2');
    const [time1, setTime1] = React.useState();
    const [time2, setTime2] = React.useState();
    const timerRef = React.useRef();
    const timerRef2 = React.useRef();
    const [showResult, setShowResult] = React.useState(false);

    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    const handleClickQuery = () => {
        var randomtime1 = (Math.random() * (1.95 - 1.92)) + 1.92;
        var time3 = randomtime1.toFixed(3);
        setTime1(time3);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }


        if (query !== 'idle') {
            setQuery('idle');
            return;
        }

        setQuery('progress');
        timerRef.current = window.setTimeout(() => {
            setQuery('success');
        }, 2000);
    };


    const handleClickQuery2 = () => {

        var randomtime2 = (Math.random() * (10.05 - 9.98)) + 9.98;
        var time4 = randomtime2.toFixed(3);
        setTime2(time4);

        if (timerRef2.current) {
            clearTimeout(timerRef2.current);
        }


        if (query2 !== 'idle2') {
            setQuery2('idle2');
            return;
        }

        setQuery2('progress2');
        timerRef2.current = window.setTimeout(() => {
            setQuery2('success2');
            setShowResult(true);
        }, 10000);
    };

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: 35, fontSize: 40 }}>Ladezeit Simulation</h1>
            <div className="textLoadingGame">
                <p className='pLoadingGame'>Diese Simulation soll das Problem mit der Ladezeit verdeutlichen.</p>
                <p className='pLoadingGame'>Die Liste 1 stellt eine kleine Liste dar. Liste 2 hingegen stellt eine Big Data Liste dar.</p>
                <p className='pLoadingGame'>Probier sie doch einfach einmal zu Laden und beobachte den Unterschied.</p>
            </div>
            <table className="tableLoadingGame">
                <tr>
                    <th>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ height: 40 }}>
                                {query === 'success' ? (
                                    <Typography>Geladen, Dauer: {time1} Sekunden!</Typography>
                                ) : (
                                    <Fade
                                        in={query === 'progress'}
                                        style={{
                                            transitionDelay: query === 'progress' ? '800ms' : '0ms',
                                        }}
                                        unmountOnExit
                                    >
                                        <CircularProgress />
                                    </Fade>
                                )}
                            </Box>
                            <Button variant="contained" onClick={handleClickQuery} sx={{ m: 2 }}>
                                {query !== 'idle' ? 'Reset' : 'Lade Liste 1'}
                            </Button>
                        </Box>
                    </th>


                    <th>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ height: 40 }}>
                                {query2 === 'success2' ? (
                                    <Typography>Geladen, Dauer: {time2} Sekunden!</Typography>
                                ) : (
                                    <Fade
                                        in={query2 === 'progress2'}
                                        style={{
                                            transitionDelay: query2 === 'progress2' ? '800ms' : '0ms',
                                        }}
                                        unmountOnExit
                                    >
                                        <CircularProgress />
                                    </Fade>
                                )}
                            </Box>
                            <Button variant="contained" onClick={handleClickQuery2} sx={{ m: 2 }}>
                                {query2 !== 'idle2' ? 'Reset' : 'Lade Liste 2'}
                            </Button>
                        </Box>
                    </th>
                </tr>
            </table>
            {showResult ? (
                <div className="textLoadingGame">
                    <p className='pLoadingGame'>Wie du siehst braucht die Liste 2 deutlich länger.</p>
                    <p className='pLoadingGame'>Durch das riesige Volumen wird die Ladezeit deutlich länger und stellt somit eine Herausforderung dar.</p>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}