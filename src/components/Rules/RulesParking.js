import React from 'react'
import { useTranslation } from 'react-i18next'
import './rules.css'
import { Box } from '@mui/material';
export default function RulesParking() {
    const {t} = useTranslation();
  return (
    <Box className='rulesss' sx={{
        pt:'110px'
    }}>
      <h1 dangerouslySetInnerHTML={{__html:t("RulesParking.ParkingTitle") }} ></h1>
      <p dangerouslySetInnerHTML={{__html:t("RulesParking.ParkingTeaxt") }}>
      
      </p>
    </Box>
  )
}
