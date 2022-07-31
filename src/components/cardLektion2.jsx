//Die Cards wurden mithilfe eines Templates von Material UI erstellt. https://mui.com/material-ui/react-card/
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardExample() {
    return (

        <Box sx={{ flexGrow: 1, paddingBottom: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card sx={{ maxWidth: 380 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Parallelverarbeitung
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Text
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Wenn du genauer verstehen möchtest, was es mit Parallelverarbeitung auf sich hat,
                                    dann probier doch mal das kleine Minigame.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/parallelGame" style={{ textDecoration: 'none' }}><Button size="large" color="primary">
                                Game
                            </Button></Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: 380 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Ladezeiten
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Text
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Wenn du ein Beispiel dafür möchtest dann probier doch mal die kleine Simulation.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/loadingGame" style={{ textDecoration: 'none' }}><Button size="large" color="primary">
                                Siumlation
                            </Button></Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: 380 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Variety
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Variety steht für die Heterogenität der Daten. Diese entsteht, da die Daten von verschiedenen Systemen produziert
                                    werden und somit verschiedenen Formaten vorliegen. Zusätzlich können sie in einer sortieren oder unsortieren Form
                                    vorliegen und sie können auch unvollständig sein. Dadruch wird die Analyse erschwert.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Wenn du genauer verstehen möchtest, was Variety bedeutet, dann probier doch mal das Minigame.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/varietyGame" style={{ textDecoration: 'none' }}><Button size="large" color="primary">
                                Game
                            </Button></Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: 380 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Variability
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Variability (dt. Variabilität) steht für die Unbeständigkeit der Daten.
                                    Sowohl die Übertragungsrate, das Format oder ihre Bedeutung können sich im Verlaufe
                                    der Zeit oder abhängig von der Datenquelle verändern.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Wenn du genauer verstehen möchtest, was Variability bedeutet, dann probier doch mal das Minigame.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/variabilityGame" style={{ textDecoration: 'none' }}><Button size="large" color="primary">
                                Game
                            </Button></Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    );
}