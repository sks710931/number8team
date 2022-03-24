import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import twitter from '../assests/twittericon.svg';
import opensea from '../assests/collection.png';
import discord from '../assests/discord.svg';

export const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.footer}>
            <a href="https://twitter.com/TheNumber8Club" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" className={classes.logo}/></a>
            <a href="https://discord.gg/qeDEHv4ga7" target="_blank" rel="noreferrer"><img src={discord} alt="discord" className={classes.logo}/></a>
            <a href="https://paintswap.finance/marketplace/collections/0xdeb666446ecb7fb19a79026f3d1361eb96b06c6c"><img src={opensea} alt="opensea" className={classes.logo}/></a>
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