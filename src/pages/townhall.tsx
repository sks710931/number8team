import { makeStyles } from "@mui/styles";
import { ReactElement } from "react";
import { Theme, Typography } from "@mui/material";

import Grid from '@mui/material/Grid';
import { Footer } from "../components/footer";

export const Townhall = (): ReactElement => {
    
    const classes = useStyles();

    return (
        <div className={classes.top}>
            <div className={classes.header}>
                <Typography className={classes.about}>About</Typography>
            </div>
            <Grid container>
                <Grid xs={12} md={12} lg={12} xl={12} style={{zIndex: '2'}}>
                    <div className={classes.txtdiv}>
                        <div className={classes.text}>
                            Welcome to the #8 club.
                        </div>
                        <div className={classes.text}>
                        The #8 Coin is a collection of 8888 unique NFTs on the Fantom Network. Its sole purpose is to reward its holders. The holders of #8 coin get chance to win the reward giveaways on the 8th, 18th, and 28th of each month.
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </div>
    )
}


const useStyles = makeStyles((theme: Theme) => ({
    top: {
        marginTop: '-3%',
    },
    header: {
        color: '#0000ff',
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: '300',
        height: '35px',
        display: 'flex',
        marginTop: 60,
        justifyContent: "center",
        [theme.breakpoints.down(900)]: {
            fontSize: '25px',
            paddingBottom: '10px',
            marginInlineStart: '10px'
        }
    },
    about:{
        borderRadius: 5,
        fontSize: '22px !important',
        textTransform: "uppercase",
        color:"black",
        backgroundColor: "#c7953e",
        width: "200px"
    },
    txtdiv: {
        paddingTop: '40px',
        [theme.breakpoints.down(900)]: {
            marginLeft: '20px',
            marginRight: '20px',
        }
    },
    text: {
        color: '#ffffff',
        fontSize: '22px',
        fontWeight: '350',
        marginTop: '20px',
        marginBottom: '30px',
        letterSpacing: '5px',
        wordSpacing: '6px',
        lineHeight: '28px',
        [theme.breakpoints.down(900)]: {
            letterSpacing: '3px',
        }
    },
    imgdiv: {
        zIndex: '-10',
        [theme.breakpoints.down(900)]: {
            marginLeft: '3%',
        }
    },
    img:{
        width: 'auto',
        maxHeight: 'calc(100vh - 207px)',
        position:'fixed',
        right: 100,
        bottom:100,
        [theme.breakpoints.down(1499)]: {
            maxHeight: 'calc(100vh - 165px)',
        },
        [theme.breakpoints.down(1199)]: {
            position:'absolute',
            top:170
        }
    },
    footer: {
        width: '90%',
    }
})
)