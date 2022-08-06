
import '../games/horizontaleSkalierung.css'
import React, { useState } from "react";
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { color } from '@mui/system';


function HorizontaleSkalierung() {
    const [showResults, setShowResults] = useState(true);
    const [number, setNumber] = useState([0, 1, 2, 3]);
    const [result, setResult] = useState([10, 180, 120, 40]);
    const [sliderValue, setSliderValue] = useState([100, 100, 100, 100]);


    var multiplier = 0.5;


    function checkResults() {
        for (var i = 0; i < result.length; i++) {
            console.log("Result:", result[i], "SliderValue:", sliderValue[i])
            if (result[i] == sliderValue[i]) {
                console.log("an der stelle:", i, "stimmt der wert.");
            } else {
                // console.log("an der stelle:", i, "stimmt der wert nicht. SilderValue=", sliderValue[i]);
            }
        }
    }



    function startTimerTask() {

        var timerID = setInterval(function () {
            console.log("5 seconds completed");
            if (number.length < 20) {
                multiplier = multiplier * 1.6;
                addBar(multiplier);
                clearInterval(timerID);
                startTimerResult()
            } else {
                clearInterval(timerID);
            }

        }, 5000);
    }

    function startTimerResult() {
        var timerID = setInterval(function () {
            console.log("2 seconds completed");
            clearInterval(timerID);
            setNumber([]);
            setResult([]);
            startTimerTask();
        }, 5000);

    }



    function randomNumber() {
        var x = (Math.floor(Math.random() * (9)) + 1) * 10;
        return x;
    }

    function addBar(multiplier) {
        var multi = math.floor(multiplier);
        console.log(multi);
        for (var i = 0; i < multi; i++) {
            setNumber(oldArray => [...oldArray, number.length]);
        }
        for (var i = 0; i < multi; i++) {
            setResult(oldArray => [...oldArray, randomNumber()]);
        }
        for (var i = 0; i < multi; i++) {
            setSliderValue(oldArray => [...oldArray, 100]);
        }
    }

    function valuetext(value) {
        return `${value}°C`;
    }

    const handleSliderChange = (arialabel, id) => {
        var tempArray = [...sliderValue];
        tempArray[arialabel] = id;
        setSliderValue(tempArray);
        console.log("Slider change, Value:", id);
        console.log("ArrayWert:", sliderValue[id]);
        console.log("aria-label", arialabel);
    };

    const customListBar = (items) => (
        items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;
            return (
                <ListItem
                    key={value}
                >
                    <Slider
                        defaultValue={100}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={200}
                        onChange={handleSliderChange}
                    />
                </ListItem>
            );
        })
    );

    const customListResult = (items) => (
        items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
                <ListItem
                    key={value}
                    role="listitem"
                >
                    <ListItemText id={labelId} primary={`${value}`} />
                </ListItem>
            );
        })
    );




    return (
        <>
            <Button variant='outlined' onClick={() => { startTimerTask() }}>
                Start Game
            </Button>
            <Button variant='outlined' onClick={() => { checkResults() }}>
                Check
            </Button>
            <table className="calculationsTable">
                <tr>
                    <th style={{ fontSize: 30 }}>Slider</th>
                    <th style={{ fontSize: 30 }}>Wert</th>
                </tr>
                <tr>
                    <th >{customListBar(number)}</th>
                    <th >{customListResult(result)}</th>
                </tr>
            </table>

            <h1>Das Spiel geht noch nicht!</h1>
        </>
    )
}

export default HorizontaleSkalierung;

