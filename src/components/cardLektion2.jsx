//Die Cards wurden mithilfe eines Templates von Material UI erstellt. https://mui.com/material-ui/react-card/
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
                                    Vertikale Skalierung
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Bei der vertikalen Methode wird von einem System die Hardware (z.B. Prozessor, Gra-fikkarte, Arbeitsspeicher) verbessert und somit eine höhere Performance erreicht.
                                    Hierbei limitiert jedoch die Physik die Obergrenzen des Systems. Die Skalierbarkeit ist begrenzt.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Wenn du genauer verstehen möchtest, was es mit Parallelverarbeitung auf sich hat,
                                    dann probier doch mal das kleine Minigame.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/parallelGame" style={{ textDecoration: 'none' }}><Button size="large" color="primary">
                                Skalierung Game
                            </Button></Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: 380 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Horizonzale Skalierung
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Bei der horizontalen Skalierung werden mehrere Systeme zusammengeschaltet, sodass diese wie ein einziges System funktionieren.
                                    Hierbei kann eine deutlich bessere Skalierbarkeit erreicht werden, weshalb dieser Ansatz der bessere für Big Data ist.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/parallelGame" style={{ textDecoration: 'none' }}><Button size="large" color="primary">
                                Skalierung Game
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
                                    PlaceHolder
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize="medium">
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/placeHolder" style={{ textDecoration: 'none' }}><Button size="large" color="primary">
                                Game
                            </Button></Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    );
}