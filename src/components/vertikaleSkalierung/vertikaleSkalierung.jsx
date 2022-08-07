import { useState } from 'react'
import React from 'react';
import Grid from '@mui/material/Grid';
import './vertikaleSkalierung.css'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper'

let time = 10;

function VertikaleSkalierung() {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [showResults, setShowResults] = useState(false);

    let multiplier = 99;
    let eingabe = false;
    let inital = (Math.random() * (500000 * multiplier)) + 10000 * multiplier;
    var num = inital.toFixed(0);
    let counter_gerade = 0;
    var digits = num.toString().split('');
    var realDigits = digits.map(Number)
    console.log(realDigits);

    for (var i = 0; i < realDigits.length; i++) {
        if (realDigits[i] % 2 === 0) {
            counter_gerade = counter_gerade + 1;
            console.log(realDigits[i]);
        }
    } console.log(counter_gerade)

    function checkValue() {
        if (document.getElementById('geradeZahlCheck').value == counter_gerade) {
            eingabe = true;
            console.log(document.getElementById('geradeZahlCheck').value);
            console.log(eingabe);
            setScore(score + 1);
        }
        else {
            eingabe = false;
            console.log(document.getElementById('geradeZahlCheck').value);
            console.log(eingabe);
        }
        setLevel(level + 1);
        geradeZahlCheck.value = "";
        timerLeftTime();

    }


    function startGame() {
        setGameStarted(true);
        console.log('startGame time:', time);
        var time = 20,
            display = document.querySelector('#time');
        startTimer(time, display);
        checkValue();
    }

    function checkDuringGame() {
        checkValue();
    }

    function startTimer(duration, display) {
        var timer = duration, seconds;
        setInterval(function () {
            seconds = parseInt(timer % 60, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = seconds;
            if (--timer < 0) {
                setShowResults(true);
                clearInterval(timer);
            }
        }, 1000);
    }

    return (
        <>
            {showResults ? (
                <>
                    <h1 style={{ textAlign: "center", marginTop: 40, fontSize: 50 }}>Du hast {score} von {level} Leveln richtig!</h1>
                    <h1 style={{ textAlign: "center", }}>Um mehr Level in der gleichen Zeit zu schaffen, könnte man die vertikale oder horionzale Skalierung einsetzen.</h1>
                    <h3 style={{ textAlign: "center" }}>Bei der vertikalen Skalierung könnte man z.B. einen schneller Menschen das Spiel spielen lassen.</h3>
                    <h3 style={{ textAlign: "center" }}>Aber ein Mensch hat irgendwo seine Grenzen. Seine Fähigkeiten sind immer limitiert.</h3>
                    <h3 style={{ textAlign: "center" }}>Das Gleiche gilt auch für einen Computer.</h3>
                    <br />
                    <h3 style={{ textAlign: "center" }}>Bei der horizontalen Skalierung könnte man einfach mehr Menschen gleichzeitig diese Aufgaben lösen lassen.</h3>
                    <h3 style={{ textAlign: "center" }}>Angenommen 10 Menschen spielen das Spiel gleichzeitig.</h3>
                    <h3 style={{ textAlign: "center" }}>Wenn jeder alle 5 Sekunden 1 level schaffen würde, dann wären das 40 Level.</h3>
                    <br />
                    <h3 style={{ textAlign: "center" }}>Ein Mensch alleine müsste dafür alle 0,5 Sekunden ein Level schaffen.</h3>
                    <h3 style={{ textAlign: "center" }}>Das ist jedoch sehr unrealistisch.</h3>
                    <h3 style={{ textAlign: "center" }}>Deswegen wäre auch hier die horizontale Skalierung besser, wenn man eine möglichst gute Leistung erreichen möchte.</h3>
                    <ul>
                        <li>
                            <Link to="/lektion2" style={{ textDecoration: 'none', color: 'black' }}>
                                <Typography color={'black'} textAlign="center">Lektion 2</Typography>
                            </Link>
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <h1 style={{ textAlign: "center", marginTop: 40, fontSize: 50 }}>Zähle die geraden Ziffern! (0,2,4,6,8)</h1>
                    <h1 style={{ textAlign: "center", }}>Wie viele Level schaffst du in 20 Sekunden?</h1>
                    <h3 style={{ textAlign: "center" }}>Du hast bisher {score} von {level} richtig</h3>
                    <h3 style={{ textAlign: "center", marginBottom: 40 }}>Du hast noch <span id="time">20</span> Sekunden Zeit!</h3>
                    <Grid container spacing={0} justifyContent="center" >
                        <table style={{ border: 0, fontSize: 30 }}>
                            <tr>
                                <th>Zahl</th>
                                <th>Wie viele gerade Ziffern?</th>
                            </tr>
                            <tr>
                                <th><Grid item>{num}</Grid></th>
                                <th><Grid item><input placeholder='Anzahl gerader Zahlen' id='geradeZahlCheck'></input>
                                </Grid></th>
                            </tr>
                        </table>
                    </Grid>
                    <br />
                    {gameStarted ? (
                        <div className="text-center"><button style={{ fontSize: 40 }} onClick={checkDuringGame}>Weiter</button></div>
                    ) : (
                        <div className="text-center"><button style={{ fontSize: 40 }} onClick={startGame}>Start</button></div>
                    )}
                </>
            )}



        </>
    )
}

export default VertikaleSkalierung;


