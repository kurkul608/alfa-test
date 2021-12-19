import {AppBar, Toolbar} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import React from "react";

export const Bar = () => {
    return <AppBar position="relative">
        <Toolbar>
            <PetsIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
                Molchanov Cats
            </Typography>
        </Toolbar>
    </AppBar>
}