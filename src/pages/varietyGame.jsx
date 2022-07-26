// Die Drag and Drop Logik bassiert auf einem Projekt von Gina Franco. https://codesandbox.io/u/ginafranco https://codesandbox.io/s/react-drag-drop-container-go845?file=/public/index.html
import '../pages/varietyGame.css'
import Boxable from "./varietyGameBoxable";
import Box from "./varietyGameBox";
import React, { useState } from "react";

export default function VarietyGame() {
    const [level, setLevel] = useState(0);

    const backToStart = () => {
        setLevel(0);
    };

    const nextLevel = () => {
        if (level == 1) {

        } else {
            setLevel(level + 1);
        }

    };

    switch (level) {
        case 0:

            return (
                <div className="App drag_things_to_boxes" style={{ marginTop: 20 }}>
                    <h2>Variety Game: Ziehe die Bilder in die richtigen Boxen</h2>
                    <ul style={{ marginTop: 20 }}>
                        <li>
                            <strong> Note: Du kannst die Items auch zwischen den Boxen verschieben. Nutze dafür das Symbol: &#8759;</strong>
                        </li>
                    </ul>
                    <div className="things_to_drag" style={{ marginTop: 20 }}>
                        <Boxable targetKey="essen" label="Banane" image="img/banane.png" />
                        <Boxable targetKey="essen" label="Cheeseburger" image="img/cheeseburger.png" />
                        <Boxable targetKey="essen" label="Orange" image="img/orange.png" />
                        <Boxable targetKey="essen" label="Gurke" image="img/gurke.png" />
                        <Boxable targetKey="tier" label="Gorilla" image="img/gorilla.png" />
                        <Boxable targetKey="tier" label="Hund" image="img/hund.png" />
                        <Boxable targetKey="form" label="Kreis" image="img/kreis.png" />
                        <Boxable targetKey="form" label="Quadrat" image="img/quadrat.png" />
                        <Boxable targetKey="form" label="Dreieck" image="img/dreieck.png" />
                    </div>
                    <div className="headers">
                        <h1>Essen</h1>
                        <h1>Tiere</h1>
                        <h1>Formen</h1>
                    </div>
                    <div className="boxes">
                        <Box targetKey="essen" />
                        <Box targetKey="tier" />
                        <Box targetKey="form" />
                    </div>
                    <div style={{ clear: "both" }}>&nbsp;</div>
                    <h3>Wenn du alles Ordnungsgemäß sortiert hast, dann geht es hier zur nächsten Stufe</h3>
                    <ul style={{ marginTop: 20 }}>
                        <li>
                            <button className='buttonVariety' onClick={() => backToStart()}>Zurück zum Start</button>
                            <button className='buttonVariety' onClick={() => nextLevel()}>Nächste Stufe</button>
                        </li>
                    </ul>
                </div >
            );

            break;
        case 1:
            return (
                <div className="App drag_things_to_boxes" style={{ marginTop: 20 }}>
                    <h2>Variety Game: Ziehe die Bilder in die richtigen Boxen</h2>
                    <ul style={{ marginTop: 20 }}>
                        <li>
                            <strong> Note: Du kannst die Items auch zwischen den Boxen verschieben. Nutze dafür das Symbol: &#8759;</strong>
                        </li>
                    </ul>
                    <div className="things_to_drag" style={{ marginTop: 20 }}>
                        <Boxable targetKey="essen" label="Banane" image="img/banane.png" />

                    </div>
                    <div className="headers">
                        <h1>Essen</h1>
                        <h1>Tiere</h1>
                        <h1>Formen</h1>
                    </div>
                    <div className="boxes">
                        <Box targetKey="essen" />
                        <Box targetKey="tier" />
                        <Box targetKey="form" />
                    </div>
                    <div style={{ clear: "both" }}>&nbsp;</div>
                    <h3>Wenn du alles Ordnungsgemäß sortiert hast, dann geht es hier zur nächsten Stufe</h3>
                    <ul style={{ marginTop: 20 }}>
                        <li>
                            <button className='buttonVariety' onClick={() => backToStart()}>Zurück zum Start</button>
                            <button className='buttonVariety' onClick={() => nextLevel()}>Nächste Stufe</button>
                        </li>
                    </ul>
                </div >
            );
            break;
        default:
            return (
                <div className="App drag_things_to_boxes" style={{ marginTop: 20 }}>
                    <h2>Ups, da ist etwas schief gegangen. Bitte lade die Seite neu.</h2>
                </div >
            );
            break;
    }


}














































/*

import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

export default function VarietyGame() {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);

    const customList = (items) => (
        <Paper sx={{ width: 400, height: 600, overflow: 'auto', marginTop: 20 }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;
                    return (
                        <Draggable key={value} draggableId={labelId} index={value}>
                            {(provided) => (
                                <ListItem
                                    role="listitem"
                                    {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
                                >
                                    <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                                </ListItem>
                            )}
                        </Draggable>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

    return (
        <DragDropContext>
            <Droppable droppableId='grid'>
                {(provided) => (
                    <Grid container spacing={2} justifyContent="center" alignItems="center" {...provided.droppableProps} ref={provided.innerRef}>

                        <Grid item>{customList(left)}</Grid>
                        <Grid item>{customList(right)}</Grid>
                    </Grid>
                )}
            </Droppable>
        </DragDropContext>
    );
}
*/