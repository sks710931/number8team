import { ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Footer } from "../components/footer";

export const Faq = (): ReactElement => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <div className={classes.header}>
                        FAQ
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            WHAT IS CRYPTOVALE?
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            WTF ARE NFTs?
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            IS THERE A PRESALE?
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        color: '#0000ff',
        fontSize: '30px',
        textAlign:'center',
        [theme.breakpoints.down(900)]: {
            fontSize: '25px',
            paddingBottom: '10px'
        }
    },
    faq: {
        margin: '25px auto 25px auto',
        backgroundColor: '#000000',
        width: '70%',
        height: '100px',
        [theme.breakpoints.down(900)]: {
            width: '90%',
            marginLeft: '7%',
            paddingBottom: '10px'
        }
    },
    txt:{
        color: '#ffffff',
        fontSize: '30px',
        fontFamily: 'Vcr',
        padding: '30px 0 30px 30px'
    },
    footer: {
        position: 'relative',
        width: '90%',
    }
}))