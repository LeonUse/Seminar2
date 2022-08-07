
// Die Liste basiert auf einem Template von Material UI. https://mui.com/material-ui/react-transfer-list/
// Die Snackbar basiert auf einem Template von Material UI. https://mui.com/material-ui/react-snackbar/
import './volumeGame.css'
import React, { useState } from "react";
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
    const [rightList, setRightList] = useState(0);
    const [itemNumber, setItemNumber] = useState(3);
    const [randomNumbers, setRandomNumbers] = useState();
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

    var randomList = [wordsTrue, wordsFalse1, wordsFalse2];
    var randomListWords = ["wordsTrue", "wordsFalse1", "wordsFalse2"];

    function loadData() {
        var numbers = mix([0, 1, 2]);
        setRandomNumbers(numbers);
    }


    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };


    const showChooseList = () => {
        loadData();
        if (showChoices) {
            setShowChoices(false);
        } else {
            setShowChoices(true);
            switch (level) {
                case 0:
                    setItemNumber(5);
                    break;
                case 1:
                    setItemNumber(15);
                    break;
                case 2:
                    setItemNumber(100);
                    break;
            }
        }
    };

    const nextLevel = () => {
        if (level + 1 < 4) {
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
            setRightList(position);
            if (value == "wordsTrue") {
                setRight("richtig");
                setScore(score + 1);
            } else {
                setRight("falsch");
            }
            setShowResults(true);
            setClick(false);
            console.log("Right?:", right);
        } else {
            setOpen(true);
        }
    };

    function mix(array) {
        var i = array.length,
            j = 0,
            temp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

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

    return (
        <>
            {end ? (
                <>
                    <h1 style={{ padding: 20, textAlign: "center", fontSize: 50, marginTop: 10 }}>Herzlichen Glückwunsch, du hast {score} von 4 Listen wiedergefunden.</h1>
                    <div className="bottomList">
                        <h3>Wie du wahrscheinlich gemerkt hast, wurde es zunehmend schwerer, da die Listen immer größer geworden sind.</h3>
                        <h3>Dabei sind diese Listen noch lange nicht groß genug, um mit Big Data in Verbindung gebracht zu werden.</h3>
                        <h3>Bei Big Data geht es um mehrere Terrabyte an Daten.</h3>
                        <h3>Durch dieses Spiel solltest du aber einen ersten Eindruck bekommen und verstanden haben,
                            dass es zu viele Daten sind für herkömmliche Systeme.</h3>

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
                                <h2 style={{ padding: 20, textAlign: "center", marginBottom: 30 }}>Welche Liste ist die Richtige?</h2>
                                <Grid container spacing={2} justifyContent="center" >
                                    <table style={{ border: 0 }}>
                                        <tr>
                                            <th><button className='buttonVariety' onClick={checkList(randomListWords[randomNumbers[0]], 1)}>Liste 1</button></th>
                                            <th><button className='buttonVariety' onClick={checkList(randomListWords[randomNumbers[1]], 2)}>Liste 2</button></th>
                                            <th><button className='buttonVariety' onClick={checkList(randomListWords[randomNumbers[2]], 3)}>Liste 3</button></th>
                                        </tr>
                                        <tr>
                                            <th><Grid item>{customList(randomList[randomNumbers[0]])}</Grid></th>
                                            <th><Grid item>{customList(randomList[randomNumbers[1]])}</Grid></th>
                                            <th><Grid item>{customList(randomList[randomNumbers[2]])}</Grid></th>
                                        </tr>
                                    </table>

                                </Grid>

                                {showResults ? (
                                    <>
                                        <div className="bottomList">
                                            <h3>Die gesuchte Liste ist Nummer {rightList}. Deine gewählte Liste ist {right}.</h3>
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
                                        <h3>Klicke einfach den richtigen Button an :)</h3>
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
