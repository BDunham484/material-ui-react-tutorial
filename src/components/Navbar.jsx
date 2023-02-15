
import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolBar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant='h6'>
                    Brad's Project
                </Typography>
            </StyledToolBar>
        </AppBar>
    )
}

export default Navbar
