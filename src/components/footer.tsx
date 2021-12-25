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
            <a href="https://twitter.com/CRYPTOVALENFT" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" className={classes.logo}/></a>
            <a href="https://www.tiktok.com/@cryptovalenft" target="_blank" rel="noreferrer"><img src={tiktok} alt="tiktok" className={classes.logo}/></a>
            <a href="#"><img src={opensea} alt="opensea" className={classes.logo}/></a>
            <a href="https://discord.gg/9bnShFvamD" target="_blank" rel="noreferrer"><img src={discord} alt="discord" className={classes.logo}/></a>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        width: '100%',
        position: 'fixed',
        left:'85%',
        bottom: '4%',
        display: 'flex',
        [theme.breakpoints.down(1050)]: {
            left: '0',
            bottom: '2%',
            justifyContent: 'center'
        }
    },
    logo: {
        width: '30px',
        height: '30px',
        paddingRight: '15px',
        cursor: 'pointer',
        [theme.breakpoints.down(900)]: {
            width: '40px',
            height: '40px',
            paddingRight: '10px',
        }
    }
}))