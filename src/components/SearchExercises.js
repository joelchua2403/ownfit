import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import { options, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

useEffect(() => {
  const fetchExerciseData = async () => {
    const bodyPartsData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, options);
    setBodyParts(['all', ...bodyPartsData]);
  }
  fetchExerciseData();
}, []);

  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, options);
     const searchedExercises = exerciseData.filter(exercise => exercise.name.toLowerCase().includes(search)
     || exercise.target.toLowerCase().includes(search)
     || exercise.equipment.toLowerCase().includes(search)
     || exercise.bodyPart.toLowerCase().includes(search));
     setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems='center' mt="37px"
    justifyContent="center" p="20px" >
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }}}
         mb='50px' textAlign='center'>
        Best Exercises You <br />
        Should Try
      </Typography>
        <Box position='relative' mb='72px' >
          <TextField
          sx={{
            input: { fontWeight: 700, border: 'none', borderRadius: '4px', },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#F5F5F5', 
            borderRadius: '40px',
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
          />
          <Button className='search-btn'
          sx={{ 
            backgroundColor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute', right: '0',
          }} 
          onClick={handleSearch}>
            Search
          </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises
