import React from 'react'
import {Typography} from '@mui/material'

function MuiTypography() {
  return (
    <div>
      <Typography variant='h1'>H1 Heading</Typography>
      <Typography variant='h2'>H2 Heading</Typography>
      <Typography variant='h3'>H3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>H4 Heading</Typography>
      <Typography variant='h5'>H5 Heading</Typography>
      <Typography variant='h6'>H6 Heading</Typography>

      <Typography variant='subtitle1'>Title-1</Typography>
      <Typography variant='subtitle2'>Title-2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sit unde distinctio voluptas culpa ipsum deleniti aliquid beatae sint est veritatis saepe molestiae nisi neque in, commodi velit reiciendis ab.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit doloribus quasi adipisci maiores ad incidunt a, minima ducimus nam molestias debitis esse quo illo non beatae! Ullam dignissimos molestias impedit.</Typography>

    </div>
  )
}

export default MuiTypography
