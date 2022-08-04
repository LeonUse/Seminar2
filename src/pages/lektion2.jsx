import { Container } from '@mui/material'
import '../pages/lektion2.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardLektion2 from '../components/cardLektion2'

function Lektion2() {
    return (
        <div className='head'>
            <h1>Big Data -</h1>
            <p>Skalierung</p>
            <iframe className='video' width="840" height="472" src="https://www.youtube-nocookie.com/embed/Ph6YSr7f5-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="body">
                <Container maxWidth="xl">
                    <CardLektion2 />
                </Container>
            </div>
        </div>

    )
}

export default Lektion2;
