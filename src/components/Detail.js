import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
    const { name, bodyPart, gifUrl, target, equipment} = exerciseDetail;
  return (
    <div>
      <Stack gap='60px' sx={{flexDirection: { lg: 'row' }, p: '20px', alignItems:'center' }}>
        
        </Stack>
    </div>
  )
}

export default Detail
