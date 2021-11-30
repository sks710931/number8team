import React from "react";
import { ReactElement } from "react";
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import image1 from '../assests/image1.jpeg';

export const Team = (): ReactElement => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <div className={classes.header}>
                        TEAM
                    </div>
                    <div className={classes.imgdiv}>
                        <img src={image1} alt="img" className={classes.img} />
                    </div>
                    <div className={classes.header}>
                        MAYOR OF CRYPTOVALE, KARLENE
                    </div>
                    <div className={classes.bodytxt}>
                        - ETHIO - PINO FROM CANADA
                    </div>
                    <div className={classes.bodytxt}>
                        - LOVER OF HORROR MOVIES
                    </div>
                    <div className={classes.bodytxt}>
                        - ALLEGED ARTIST
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

const useStyles = makeStyles(() => ({
    header: {
        color: '#0000ff',
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: '300',
        height: '35px'
    },
    imgdiv: {
        width: '100%',
        textAlign: 'center',
        margin: '20px 0px 20px 0px'
    },
    img: {
        width: '40%',
        maxWidth: '350px',
        maxHeight: '350px',
        objectFit: 'cover',
    },
    bodytxt: {
        paddingTop: '5px',
        color: '#ffffff',
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: '300',
        height: '35px'
    }
}))