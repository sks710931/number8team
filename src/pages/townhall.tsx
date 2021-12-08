import { makeStyles } from "@mui/styles";
import { ReactElement } from "react";
import { Theme } from "@mui/material";

import image from '../assests/townhallgirl.png';

import Grid from '@mui/material/Grid';
import { Footer } from "../components/footer";

export const Townhall = (): ReactElement => {
    
    const classes = useStyles();

    return (
        <div className={classes.top}>
            <div className={classes.header}>
                TOWNHALL
            </div>
            <Grid container>
                <Grid xs={12} md={12} lg={8} xl={8} style={{zIndex: '2'}}>
                    <div className={classes.txtdiv}>
                        <div className={classes.text}>
                            Welcome to Cryptovale, the most fashionable town on the Polygon blockchain.
                        </div>
                        <div className={classes.text}>
                            Cryptovale is a collection of 4444 randomly generated stylish girls derived from over 300 hand drawn traits. The collection is inspired by Y2K fashion and the 2000s cartoons that shaped the childhood of our mayor and artist, Karlene.
                        </div>
                        <div className={classes.text}>
                            Cryptovale gives collectors a unique piece of art, while also giving back to the community and making sure the NFT space represents and is accessible to everyone—not just a few. 
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} md={12} lg={4} xl={4}>
                    <div className={classes.imgdiv}>
                        <img src={image} alt="img" className={classes.img} />
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
        [theme.breakpoints.down(900)]: {
            fontSize: '25px',
            paddingBottom: '10px',
            marginInlineStart: '10px'
        }
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
        marginLeft: '-50%',
        [theme.breakpoints.down(900)]: {
            marginLeft: '3%',
        }
    },
    img:{
        width: '170%',
        maxWidth: '55vw',
        maxHeight: '90vh',
        position:'absolute',
        right: 0,
        [theme.breakpoints.down(900)]: {
            maxWidth: '96vw',
        }
    },
    footer: {
        width: '90%',
    }
})
)