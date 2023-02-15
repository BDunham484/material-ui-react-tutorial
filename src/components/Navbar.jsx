
import { AppBar, Avatar, Badge, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CastleIcon from '@mui/icons-material/Castle';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({

}));

const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    Brad's Project
                </Typography>
                <CastleIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar src='..\assets\images\hi-res-profile.jpg'/>
                </Icons>
            </StyledToolBar>
        </AppBar>
    )
}

export default Navbar
