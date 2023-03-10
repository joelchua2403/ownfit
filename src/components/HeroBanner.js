import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
   <Box
   sx={{
    mt: { lg: '212px', xs: '70px'},
    ml: { sm: '50px'},
   }} 
   position="relative" p='20px' >
    <Typography color='#FF2625'
    fontWeight='600' fontSize='26px' >
      Own your fitness
    </Typography>
    <Typography fontWeight={700} 
    sx={{ fontSize: { lg: '44px', xs: '40px'}}}
    mb='23px' mt='30px' >
      Eat, Gym <br /> and Repeat
    </Typography>
    <Typography fontSize='22px' lineHeight='35px' mb={4}
    >
      Get your fitness on track
    </Typography>
    <Button variant='contained'
    color='error' href="#exercises"
    sx={{ 
      backgroundColor: '#FF2625',
      padding: '10px',
    }}>
      Explore Exercises
      </Button>
    <img src={HeroBannerImage} alt="banner"  className='hero-banner-img' sx={{ display: { xs: 'none' } }}/>
   </Box>
  )
}

export default HeroBanner
