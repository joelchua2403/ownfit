
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { options, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, options);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises"
    sx={{mt: { lg: '110px '}}}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px'}}}
      flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          ></Pagination>
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
