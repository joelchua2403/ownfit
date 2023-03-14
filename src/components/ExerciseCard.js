import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <div>
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
            <Button sx={{ ml: '21px', color: '#fff', backgroundColor: '#ffa9a9', borderRadius: '20px', fontSize: '14px', textTransform: 'capitalize' }}>{exercise.target}</Button>
        </Stack>
        <Typography ml='21px' mt='11px' fontSize='22px' fontWeight='bold' color='#000' pb='10px'>{exercise.name}</Typography>
    </Link>
    </div>
  )
}

export default ExerciseCard
