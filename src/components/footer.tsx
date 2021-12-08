import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import twitter from '../assests/twitterlogo.png';
import tiktok from '../assests/tiktoklogo.png';
import opensea from '../assests/opensealogo.png';
import discord from '../assests/discordlogo.png';

export const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.footer}>
            <img src={twitter} alt="twitter" className={classes.logo}/>
            <img src={tiktok} alt="twitter" className={classes.logo}/>
            <img src={opensea} alt="twitter" className={classes.logo}/>
            <img src={discord} alt="twitter" className={classes.logo}/>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        width: '100%',
        position: 'fixed',
        left: '80%',
        bottom: '7%',
        display: 'flex',
        [theme.breakpoints.down(1050)]: {
            left: '0',
            bottom: '2%',
            justifyContent: 'center'
        }
    },
    logo: {
        width: '60px',
        height: '60px',
        paddingRight: '20px',
        cursor: 'pointer',
        [theme.breakpoints.down(900)]: {
            width: '40px',
            height: '40px',
            paddingRight: '10px',
        }
    }
}))