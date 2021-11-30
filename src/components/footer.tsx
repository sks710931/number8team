import { makeStyles } from "@mui/styles";
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

const useStyles = makeStyles(() => ({
    footer: {
        width: '100%',
        position: 'fixed',
        left: '70%',
        bottom: '7%',
        display: 'flex',
    },
    logo: {
        width: '60px',
        height: '60px',
        paddingRight: '20px',
        cursor: 'pointer'
    }
}))