import { Container } from '@mui/material'
import '../pages/lektion1.css'

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function Lektion3() {
  return (
    <div className='head'>
      <h1>Big Data -</h1>
      <p>Die 4 Vs</p>
      <iframe className='video' width="840" height="472" src="https://www.youtube-nocookie.com/embed/Ph6YSr7f5-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="body">
        <Container maxWidth="xl">

        </Container>
      </div>
    </div>

  )
}

export default Lektion3;
