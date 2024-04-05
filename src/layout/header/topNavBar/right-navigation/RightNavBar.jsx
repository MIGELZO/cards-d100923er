import { Box } from '@mui/material'
import React from 'react'
import NavItem from '../../../../routs/components/NavItem'

export default function RightNavBar() {
  return (
    <Box>
        <NavItem to={"#"} lable={"Login"}/>
    </Box>
  )
}
