import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { faker } from '@faker-js/faker';
import '../pages/velocityGame.css'
import { Avatar, ImageListItem, ListItemAvatar, ListItemIcon } from '@mui/material';

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

export default function velocityGame() {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState(new Array(10)
        .fill(true)
        .map(() => faker.image.cats(200, 200, true)));
    const [right, setRight] = React.useState(new Array(3)
        .fill(true)
        .map(() => faker.image.sports(200, 200, true)));
    var size = 10;
    var timeX = 3000;
    var multiplier = 0.5;

    function startTimer() {
        var timerID = setInterval(function () {
            multiplier = multiplier * 1.6;
            if (size < 140) {
                if (Math.round(Math.random()) == 0) {
                    addSport(multiplier);
                } else {
                    addCat(multiplier);
                }
                size = size + left.length;
                console.log(size);
                console.log("10 seconds completed");
            } else {
                console.log("stop");
                clearInterval(timerID);
                var t = document.getElementById("afterGameDiv");
                t.style.display = "block";
            }
        }, timeX);
    }

    function addSport(multi) {
        for (var i = 0; i < multi; i++) {
            setLeft(oldArray => [...oldArray, faker.image.sports(200, 200, true)]);
        }
    }
    function addCat(multi) {
        for (var i = 0; i < multi; i++) {
            setLeft(oldArray => [...oldArray, faker.image.cats(200, 200, true)]);
        }
    }


    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };


    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };



    const customList = (items) => (
        <Paper sx={{ width: 400, height: 700, overflow: 'auto', marginTop: 5, marginBottom: 20 }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;
                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemAvatar disablePadding >
                                <Avatar src={value}
                                    sx={{ width: 150, height: 150 }} />
                            </ListItemAvatar>
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

    return (
        <>
            <div className="intro">
                <h1>Dieses Game zeigt dir, was Geschwindigkeit im Sinne von Big Data bedeutet.</h1>
                <p>Deine Aufgabe ist es die Kazen Bilder links und die anderen Bilder rechts zu sortieren.</p>
                <div className="afterGame" id='afterGameDiv'>
                    <p class="small">Wie du siehst kommen die Daten viel zu schnell.</p>
                    <p class="small">Man könnte dein Erlebnis mit einer traditionellen Software vergleiche, die Versucht mit der Geschwindigkeit von Big Data mitzuhalten.</p>
                    <p class="small">Wenn du dein Glück dennoch ein weiteres mal Versuchen willst drück einfach F5 oder lade die Seite neu.</p>
                </div>
                <div className='gameButton'>
                    <Button variant='outlined' onClick={() => { startTimer() }}>
                        Start Game
                    </Button>
                </div>
            </div>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>{customList(left)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="large"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.8 }}
                            variant="outlined"
                            size="large"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>{customList(right)}</Grid>
            </Grid>
        </>
    );
}






















































/*
Das Neuladen der Tabellen geht nicht.
import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import '../pages/velocityGame.css'
import { faker } from '@faker-js/faker';
import { Avatar, ImageListItem, ListItemAvatar, ListItemIcon } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { WindowScroller } from 'react-virtualized';


faker.setLocale('de');
const imagesCat = new Array(20)
    .fill(true)
    .map(() => faker.image.cats(200, 200, true));

const deletedImg = new Array(0);
const listCat = React.createRef();

function refreshList(place) {
    listCat.current.scrollToItem(imagesCat.length);
    listCat.current.scrollToItem(0, "start");
}


function renderRowCats(props) {
    const { index, style } = props;
    return (
        <ListItem style={style} key={index} component="div" >
            <ListItemButton onClick={() => {
                deletedImg.push(imagesCat[index]); imagesCat.splice(index, 1); console.log('onClick'); console.log(index); refreshList(index); console.log(index)
            }}>
                <ListItemAvatar disablePadding >
                    <Avatar src={imagesCat[index]}
                        sx={{ width: 150, height: 150 }} />
                </ListItemAvatar>
            </ListItemButton>
        </ListItem>
    );
}
function renderRowFood(props) {
    const { index, style } = props;
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemAvatar>
                <Avatar src={deletedImg[index]}
                    sx={{ width: 150, height: 150 }} />
            </ListItemAvatar>
        </ListItem>
    );
}

export default function velocityGame() {
    return (
        <>
            <h5>Katze</h5>
            <h6>Stadt</h6>
            <div className="table">
                <div className="firstbox">
                    <Box sx={{ width: '20%', height: 400, bgcolor: 'background.paper' }}>
                        <FixedSizeList
                            ref={listCat}
                            height={700}
                            itemCount={20}
                            itemSize={250}
                            width={300}
                            overscanCount={5}>
                            {renderRowCats}
                        </FixedSizeList>
                    </Box>
                </div>
                <div className="secondbox">
                    <Box sx={{ width: '20%', height: 400, bgcolor: 'background.paper' }}>
                        <FixedSizeList
                            height={700}
                            itemCount={1000}
                            itemSize={250}
                            width={300}
                            overscanCount={5}>
                            {renderRowFood}
                        </FixedSizeList>
                    </Box>
                </div>
            </div>
        </>
    );
}



*/



















/*
Zwischenspeicher, 2 Listen, DND geht nicht.
Unable to find draggable with id: draggable-1
Invariant failed: Cannot find droppable entry with id [Cats]

import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { VariableSizeList } from 'react-window';
import '../pages/velocityGame.css'
import { faker } from '@faker-js/faker';
import { Avatar, ImageListItem, ListItemAvatar, ListItemIcon } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


faker.setLocale('de');
const getItemSize = index => rowHeights[index];
const rowHeights = new Array(1000)
    .fill(true)
    .map(() => 200);

const imagesCat = new Array(1000)
    .fill(true)
    .map(() => faker.image.cats(200, 200, true));

const imagesFood = new Array(1000)
    .fill(true)
    .map(() => faker.image.food(200, 200, true));

function renderRowCats(props) {
    const { index, style } = props;
    const id = `${imagesCat[index]}`;
    return (
        <Draggable draggableId='draggable-1'
            key={id}
            index={index}
            mode="virtual">
            {(provided) => (
                <div {...provided.dragHandleProps} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <ListItem style={style} key={index} component="div" >
                        <ListItemAvatar disablePadding >
                            <Avatar src={imagesCat[index]}
                                sx={{ width: 150, height: 150 }} />
                        </ListItemAvatar>
                    </ListItem>
                </div>
            )}
        </Draggable>
    );
}
function renderRowFood(props) {
    const { index, style } = props;
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemAvatar>
                <Avatar src={imagesFood[index]}
                    sx={{ width: 150, height: 150 }} />
            </ListItemAvatar>
        </ListItem>
    );
}

export default function velocityGame() {
    return (
        <>
            <h5>Katze</h5>
            <h6>Stadt</h6>
            <div className="table">
                <div className="firstbox">
                    <Box sx={{ width: '20%', height: 400, bgcolor: 'background.paper' }}>
                        <DragDropContext>
                            <Droppable droppableId='Cats'>
                                {(provided) => (
                                    <div {...provided.droppableProps}
                                        ref={provided.innerRef}>
                                        <VariableSizeList
                                            height={700}
                                            itemCount={1000}
                                            itemSize={getItemSize}
                                            width={300}
                                            overscanCount={5}>
                                            {renderRowCats}
                                        </VariableSizeList>
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </Box>
                </div>
                <div className="secondbox">
                    <Box sx={{ width: '20%', height: 400, bgcolor: 'background.paper' }}>
                        <VariableSizeList
                            height={700}
                            itemCount={1000}
                            itemSize={getItemSize}
                            width={300}
                            overscanCount={5}>
                            {renderRowFood}
                        </VariableSizeList>
                    </Box>
                </div>
            </div>
        </>
    );
}
*/