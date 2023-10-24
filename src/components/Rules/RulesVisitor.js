import { Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './rules.css'
export default function RulesVisitor() {
    const {t}= useTranslation()
  return (
    <Box className='rulesss' sx={{
        pt:'110px'
    }}>
      <h1 dangerouslySetInnerHTML={{__html:t("RulesVisitors.visistoryTitle") }} ></h1>
      <p dangerouslySetInnerHTML={{__html:t("RulesVisitors.visistoryText") }}></p>

    </Box>
  )
}