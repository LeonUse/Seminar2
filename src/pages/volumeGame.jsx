// Die Liste basiert auf einem Template von Material UI. https://mui.com/material-ui/react-transfer-list/
// Die Snackbar basiert auf einem Template von Material UI. https://mui.com/material-ui/react-snackbar/
import '../pages/volumeGame.css'
import React, { useState } from "react";
import Box from '@mui/material/Box';
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function VarietyGame() {

    const [level, setLevel] = useState(0); //Für die Levelauswahl
    const [showChoices, setShowChoices] = useState(false); //Die Listen zum auswählen anzeigen
    const [showResults, setShowResults] = useState(false); //Prüfen, ob Ergebnis zeige
    const [right, setRight] = useState("falsch"); //Prüfen, ob die ausgewählte Liste richtig ist
    const [click, setClick] = useState(true); //Prüfen, ob schon eine Liste ausgewählt wurde
    const [open, setOpen] = useState(false); //Snackbar
    const [end, setEnd] = useState(false);
    const [score, setScore] = useState(0);
    const [itemNumber, setItemNumber] = useState(5);
    const [wordsTrue, setWordsTrue] = useState(new Array(itemNumber)
        .fill(true)
        .map(() => faker.word.adjective(true)));
    //const [randomQuiz, setRandomQuiz] = useState([]);
    //const [quiz, setQuiz] = useState(["wordsTrue", "wordsFalse1", "wordsFalse2"]);
    faker.setLocale('de');
    const wordsFalse1 = [...wordsTrue];
    const wordsFalse2 = [...wordsTrue];

    const spliceItems = (array) => {
        var start = Math.floor(Math.random() * (array.length - 2) + 1)
        var number = Math.round(Math.random() * (2 - start - array.length / 2) + 1);
        if (number < 1) {
            number = 1;
        }
        if (start + number >= 5) {
            if (start > number) {
                start = start - 1;
            } else {
                number = number - 1;
            }
        }
        for (var i = 0; i <= number; i++) {
            array.splice(start + i, 1, faker.word.adjective(true))
        }
    }
    spliceItems(wordsFalse1);
    spliceItems(wordsFalse2);


    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    /* const backToStart = () => {
         setLevel(0);
     };
     */

    const showChooseList = () => {
        if (showChoices) {
            setShowChoices(false);
        } else {
            setShowChoices(true);
            switch (level) {
                case 0:
                    setItemNumber(15);
                    break;
                case 1:
                    setItemNumber(50);
                    break;
                case 2:
                    setItemNumber(200);
                    break;
            }
        }
    };

    const nextLevel = () => {
        if (level + 1 < 5) {
            setLevel(level + 1);
            setWordsTrue(new Array(itemNumber)
                .fill(true)
                .map(() => faker.word.adjective(true)));
            console.log("Itemnumber:", itemNumber, "Arraylänge:", wordsTrue.length, "Level:", level);
            setShowChoices(false);
            setShowResults(false);
            setClick(true);
            setOpen(false);
            setRight(false);

        } else {
            console.log("Maximales Level erreicht");
            setEnd(true);
        }
    };

    const checkList = (value, position) => () => {
        if (click) {
            if (value == "wordsTrue") {
                setRight("richtig");
                setScore(score + 1);
            }
            setShowResults(true);
            setClick(false);
            console.log("Right?:", right);
        } else {
            setOpen(true);
        }
    };

    /*const getRandomList = () => {
        while (true) {
            var temp = Math.floor(Math.random() * 3) + 1;
            for (var x = 0; x < randomQuiz.length - 1; x++) {
                if (randomQuiz[x] == x) {
                    continue
                }
            }
            setRandomQuiz((prevNumbers) => [...prevNumbers, x]);
            break;
        }
        return quiz[x];
    };
*/

    const customList = (items) => (
        <Paper sx={{ width: 250, height: 500, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;
                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                        >
                            <ListItemText id={labelId} primary={`${value}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

    const customListButton = (items, name) => (
        <Paper sx={{ width: 250, height: 500, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;
                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button
                            onClick={checkList(name)}

                        >
                            <ListItemText id={labelId} primary={`${value}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

    return (
        <>
            {end ? (
                <>
                    <h1 style={{ padding: 20, textAlign: "center", fontSize: 50, marginTop: 10 }}>Herzlichen Glückwunsch, du hast {score} von 4 Listen wiedergefunden.</h1>
                    <div className="bottomList">
                        <h3>Wie du wahrscheinlich gemerkt hast, wurde es zunehmend schwerer, da die Listen immer größer geworden sind.</h3>
                        <h3>Dabei sind diese Listen noch lange nicht groß genug, um mit Big Data in Verbindung gebracht zu werden.</h3>
                        <h3>Bei Big Data geht es um mehrere Terrabyte an Daten.</h3>
                        <h3>Durch dieses Spiel solltest du aber einen ersten Eindruck bekommen haben und verstanden haben,
                            dass es zu viele Daten sind für herkömmliche Systeme.</h3>
                        <h3>Was daduch für weitere Probleme entstehen erfährst du in Lektion 2.</h3>
                        <ul style={{ marginTop: 20 }}>
                            <li>
                                <Link to="/lektion1" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Typography color={'black'} textAlign="center">Lektion 1</Typography>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </>

            ) : (

                <>
                    {
                        showChoices ? (
                            <>
                                <h2 style={{ padding: 20, textAlign: "center" }}>Welche Liste ist die Richtige?</h2>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item>{customListButton(wordsTrue, "wordsTrue")}</Grid>
                                    <Grid item>{customListButton(wordsFalse1, "wordsFalse1")}</Grid>
                                    <Grid item>{customListButton(wordsFalse2, "wordsFalse2")}</Grid>
                                </Grid>


                                {showResults ? (
                                    <>
                                        <div className="bottomList">
                                            <h3>Die gesuchte Liste ist Nummer 1. Deine gewählte Liste ist {right}.</h3>
                                            <ul style={{ marginTop: 20 }}>
                                                <li>
                                                    <button className='buttonVariety' onClick={() => nextLevel()}>Nächtes Level</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                                Du kannst deine Liste nicht mehrfach wählen.
                                            </Alert>
                                        </Snackbar>
                                    </>
                                ) : (
                                    <div className="bottomList">
                                        <h3>Klicke einfach ein Element in der richtigen Liste an</h3>
                                    </div>

                                )}
                            </>

                        ) : (
                            <>
                                <h2 style={{ padding: 20, textAlign: "center" }}>Deine Aufgabe ist es dir die Liste zu merken und gleich wiederzufinden.</h2>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item>{customList(wordsTrue)}</Grid>
                                </Grid>

                                <div className="bottomList">
                                    <h3>Wenn du dir die Liste gemerkt hast dann klicke auf Weiter</h3>
                                    <ul style={{ marginTop: 20 }}>
                                        <li>
                                            <button className='buttonVariety' onClick={() => showChooseList()}>Weiter</button>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )
                    }
                </>

            )
            }
        </>
    );


}





















/*
switch (level) {
    case 0:
        return (
            <>
                {showChoices ? (
                    <>
                        <h2 style={{ padding: 20, textAlign: "center" }}>Welche Liste ist die Richtige?</h2>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customListButton(wordsTrue, "wordsTrue")}</Grid>
                            <Grid item>{customListButton(wordsFalse1, "wordsFalse1")}</Grid>
                            <Grid item>{customListButton(wordsFalse2, "wordsFalse2")}</Grid>
                        </Grid>


                        {showResults ? (
                            <>
                                <div className="bottomList">
                                    <h3>Die gesuchte Liste ist Nummer 1. Deine gewählte Liste ist {right}.</h3>
                                    <ul style={{ marginTop: 20 }}>
                                        <li>
                                            <button className='buttonVariety' onClick={() => nextLevel()}>Nächtes Level</button>
                                        </li>
                                    </ul>
                                </div>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                        Du kannst deine Liste nicht mehrfach wählen.
                                    </Alert>
                                </Snackbar>
                            </>
                        ) : (
                            <div className="bottomList">
                                <h3>Klicke einfach ein Element in der richtigen Liste an</h3>
                            </div>

                        )}
                    </>

                ) : (
                    <>
                        <h2 style={{ padding: 20, textAlign: "center" }}>Deine Aufgabe ist es dir die Liste zu merken und gleich wiederzufinden.</h2>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customList(wordsTrue)}</Grid>
                        </Grid>

                        <div className="bottomList">
                            <h3>Wenn du dir die Liste gemerkt hast dann klicke auf Weiter</h3>
                            <ul style={{ marginTop: 20 }}>
                                <li>
                                    <button className='buttonVariety' onClick={() => showChooseList()}>Weiter</button>
                                </li>
                            </ul>
                        </div>
                    </>
                )
                }

            </>

        );

        break;
    case 1:
        return (
            <>
                {showChoices ? (
                    <>
                        <h2 style={{ padding: 20, textAlign: "center" }}>Welche Liste ist die Richtige?</h2>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customListButton(wordsFalse1, "wordsFalse1")}</Grid>
                            <Grid item>{customListButton(wordsTrue, "wordsTrue")}</Grid>
                            <Grid item>{customListButton(wordsFalse2, "wordsFalse2")}</Grid>
                        </Grid>


                        {showResults ? (
                            <>
                                <div className="bottomList">
                                    <h3>Die gesuchte Liste ist Nummer 2. Deine gewählte Liste ist {right}.</h3>
                                    <ul style={{ marginTop: 20 }}>
                                        <li>
                                            <button className='buttonVariety' onClick={() => nextLevel()}>Nächtes Level</button>
                                        </li>
                                    </ul>
                                </div>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                        Du kannst deine Liste nicht mehrfach wählen.
                                    </Alert>
                                </Snackbar>
                            </>
                        ) : (
                            <div className="bottomList">
                                <h3>Klicke einfach ein Element in der richtigen Liste an</h3>
                            </div>

                        )}
                    </>

                ) : (
                    <>
                        <h2 style={{ padding: 20, textAlign: "center" }}>Deine Aufgabe ist es dir die Liste zu merken und gleich wiederzufinden.</h2>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customList(wordsTrue)}</Grid>
                        </Grid>

                        <div className="bottomList">
                            <h3>Wenn du dir die Liste gemerkt hast dann klicke auf Weiter</h3>
                            <ul style={{ marginTop: 20 }}>
                                <li>
                                    <button className='buttonVariety' onClick={() => showChooseList()}>Weiter</button>
                                </li>
                            </ul>
                        </div>
                    </>
                )
                }

            </>

        );


        break;
    case 2:
        return (
            <>
                {showChoices ? (
                    <>
                        <h2 style={{ padding: 20, textAlign: "center" }}>Welche Liste ist die Richtige?</h2>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customListButton(wordsFalse1, "wordsFalse1")}</Grid>
                            <Grid item>{customListButton(wordsTrue, "wordsTrue")}</Grid>
                            <Grid item>{customListButton(wordsFalse2, "wordsFalse2")}</Grid>
                        </Grid>


                        {showResults ? (
                            <>
                                <div className="bottomList">
                                    <h3>Die gesuchte Liste ist Nummer 2. Deine gewählte Liste ist {right}.</h3>
                                    <ul style={{ marginTop: 20 }}>
                                        <li>
                                            <button className='buttonVariety' onClick={() => nextLevel()}>Nächtes Level</button>
                                        </li>
                                    </ul>
                                </div>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                        Du kannst deine Liste nicht mehrfach wählen.
                                    </Alert>
                                </Snackbar>
                            </>
                        ) : (
                            <div className="bottomList">
                                <h3>Klicke einfach ein Element in der richtigen Liste an</h3>
                            </div>

                        )}
                    </>

                ) : (
                    <>
                        <h2 style={{ padding: 20, textAlign: "center" }}>Deine Aufgabe ist es dir die Liste zu merken und gleich wiederzufinden.</h2>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customList(wordsTrue)}</Grid>
                        </Grid>

                        <div className="bottomList">
                            <h3>Wenn du dir die Liste gemerkt hast dann klicke auf Weiter</h3>
                            <ul style={{ marginTop: 20 }}>
                                <li>
                                    <button className='buttonVariety' onClick={() => showChooseList()}>Weiter</button>
                                </li>
                            </ul>
                        </div>
                    </>
                )
                }

            </>

        );


        break;
    case 3:
        return (
            <>
                {showChoices ? (
                    <>
                        <h2 style={{ padding: 20, textAlign: "center" }}>Welche Liste ist die Richtige?</h2>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customListButton(wordsFalse1, "wordsFalse1")}</Grid>
                            <Grid item>{customListButton(wordsFalse2, "wordsFalse2")}</Grid>
                            <Grid item>{customListButton(wordsTrue, "wordsTrue")}</Grid>
                        </Grid>


                        {showResults ? (
                            <>
                                <div className="bottomList">
                                    <h3>Die gesuchte Liste ist Nummer 3. Deine gewählte Liste ist {right}.</h3>
                                    <ul style={{ marginTop: 20 }}>
                                        <li>
                                            <button className='buttonVariety' onClick={() => nextLevel()}>Nächtes Level</button>
                                        </li>
                                    </ul>
                                </div>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                        Du kannst deine Liste nicht mehrfach wählen.
                                    </Alert>
                                </Snackbar>
                            </>
                        ) : (
                            <div className="bottomList">
                                <h3>Klicke einfach ein Element in der richtigen Liste an</h3>
                            </div>

                        )}
                    </>

                ) : (
                    <>
                        <h2 style={{ padding: 20, textAlign: "center" }}>Deine Aufgabe ist es dir die Liste zu merken und gleich wiederzufinden.</h2>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customList(wordsTrue)}</Grid>
                        </Grid>

                        <div className="bottomList">
                            <h3>Wenn du dir die Liste gemerkt hast dann klicke auf Weiter</h3>
                            <ul style={{ marginTop: 20 }}>
                                <li>
                                    <button className='buttonVariety' onClick={() => showChooseList()}>Weiter</button>
                                </li>
                            </ul>
                        </div>
                    </>
                )
                }

            </>

        );


        break;
    case 4:
        return (
            <>
                <h2 style={{ padding: 20, textAlign: "center" }}>Herzlichen Glückwunsch, du hast {score} von 4 Listen wiedergefunden.</h2>
                <div className="bottomList">
                    <h3>Wie du wahrscheinlich gemerkt hast, wurde es zunehmend schwerer, da die Listen immer größer geworden sind.</h3>
                    <h3>Dabei sind diese Listen noch lange nicht groß genug, um mit Big Data in Verbindung gebracht zu werden.</h3>
                    <h3>Bei Big Data geht es um mehrere Terrabyte an Daten.</h3>
                    <h3>Durch dieses Spiel solltest du aber einen ersten Eindruck bekommen haben und verstanden haben,
                        dass es zu viele Daten sind für herkömmliche Systeme.</h3>
                    <h3>Was daduch für weitere Probleme entstehen erfährst du in Lektion 2.</h3>
                    <ul style={{ marginTop: 20 }}>
                        <li>
                            <Link to="/lektion1" style={{ textDecoration: 'none', color: 'black' }}>
                                <Typography color={'black'} textAlign="center">Lektion 1</Typography>
                            </Link>
                        </li>
                    </ul>
                </div>
            </>

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
*/
