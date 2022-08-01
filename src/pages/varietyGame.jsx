// Die Drag and Drop Logik bassiert auf einem Projekt von Gina Franco. https://codesandbox.io/u/ginafranco https://codesandbox.io/s/react-drag-drop-container-go845?file=/public/index.html
import '../pages/varietyGame.css'
import Boxable from "./varietyGameBoxable";
import Box from "./varietyGameBox";
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { TableHead } from '@mui/material';


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
                        <Boxable targetKey="form" label="Quadrat" image="img/quadrat.png" />
                        <Boxable targetKey="tier" label="Hund" image="img/hund.png" />
                        <Boxable targetKey="form" label="Dreieck" image="img/dreieck.png" />
                        <Boxable targetKey="tier" label="Gorilla" image="img/gorilla.png" />
                        <Boxable targetKey="form" label="Kreis" image="img/kreis.png" />
                        <Boxable targetKey="essen" label="Cheeseburger" image="img/cheeseburger.png" />

                    </div>
                    <div className="boxes">
                        <table style={{ border: 0 }}>
                            <tr>
                                <th><h8>Essen</h8></th>
                                <th><h8>Tier</h8></th>
                                <th><h8>Form</h8></th>
                            </tr>
                            <tr>
                                <th><Box targetKey="essen" /></th>
                                <th> <Box targetKey="tier" /></th>
                                <th> <Box targetKey="form" /></th>
                            </tr>
                        </table>



                    </div>
                    <div style={{ clear: "both" }}>&nbsp;</div>
                    <h3>Wenn du alles Ordnungsgemäß sortiert hast, dann geht es hier zur nächsten Stufe</h3>
                    <ul style={{ marginTop: 20 }}>
                        <li>
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
                        <Boxable targetKey="form" label="Quadrat" image="img/quadrat.png" />
                        <Boxable targetKey="tier" label="Hund" image="img/hund.png" />
                        <Boxable targetKey="form" label="Dreieck" image="img/dreieck.png" />
                        <Boxable targetKey="tier" label="Gorilla" image="img/gorilla.png" />
                        <Boxable targetKey="form" label="Kreis" image="img/kreis.png" />
                        <Boxable targetKey="essen" label="Cheeseburger" image="img/cheeseburger.png" />

                        <Boxable targetKey="essen" label="Pommes" image="img/pommes.png" />
                        <Boxable targetKey="tier" label="Vogel" image="img/vogel.png" />
                        <Boxable targetKey="false" label="Prinzessin" image="img/prinzessin.png" />
                        <Boxable targetKey="tier" label="Känguru" image="img/känguru.png" />
                        <Boxable targetKey="form" label="Fahrrad" image="img/fahrrad.png" />
                        <Boxable targetKey="false" label="Auto" image="img/auto.png" />
                        <Boxable targetKey="essen" label="Orange" image="img/orange.png" />
                        <Boxable targetKey="form" label="Kopfhörer" image="img/kopfhörer.png" />
                        <Boxable targetKey="essen" label="Gurke" image="img/gurke.png" />

                    </div>
                    <div className="headers">
                        <h8>Essen</h8>
                        <h8>Tiere</h8>
                        <h8>Formen</h8>
                    </div>
                    <div className="boxes">
                        <Box targetKey="essen" />
                        <Box targetKey="tier" />
                        <Box targetKey="form" />
                    </div>
                    <div style={{ clear: "both" }}>&nbsp;</div>
                    <ul style={{ marginTop: 20 }}>
                        <li>
                            <strong>Wie du siehst passen nicht alle Bilder in die Vorgegebenen Kategorien. Genau das gleiche Problem kann auch bei Big Data auftreten.</strong>
                        </li>
                        <li>
                            <strong>Die Daten können von vielen verschiedenen Systemen kommen und daher unterschiedliche Formate haben, sortiert, unsortiert oder auch unvollständig sein.</strong>
                        </li>
                        <li>
                            <strong>Dadurch wird die Speicherung und Analyse erschwert und es müssen neue Methoden angewendet werden. z.B. NoSQL-Datenbanken</strong>
                        </li>
                        <li>
                            <li>
                                <Link to="/lektion1" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Typography color={'black'} textAlign="center">Lektion 1</Typography>
                                </Link>
                            </li>
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
