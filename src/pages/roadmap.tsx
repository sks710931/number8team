import { makeStyles } from "@mui/styles";
import React, { ReactElement } from "react";
import { Theme, Typography } from "@mui/material";

import twentyfive from '../assests/25.png';
import fifty from '../assests/50.png';
import sevfive from '../assests/75.png';
import hundred from '../assests/100.png';

import { Footer } from "../components/footer";

export const Roadmap = (): ReactElement => {
    const classes = useStyles();
    return (
        <div className={classes.top}>
            <div className={classes.header}>
            <Typography className={classes.about}>Road Map</Typography>
            </div>
            <div className={classes.items}>
                <div className={classes.itemlist}>
                    <img src={twentyfive} alt="25" className={classes.img}/>
                    <div className={classes.desc}>
                    We will giveaway 10 #8 Coins to our Discord members and $100FTM to a random #8 Coin owner.
                    </div>
                </div>
                <div className={classes.itemlist}>
                    <img src={fifty} alt="50" className={classes.img}/>
                    <div className={classes.desc}>
                    We will giveaway 10 #8 Coins to our Discord members and $300FTM to 3 random #8 Coin owners. ($100FTM per #8 Coin owner)
                    </div>
                </div>
                <div className={classes.itemlist}>
                    <img src={sevfive} alt="75" className={classes.img}/>
                    <div className={classes.desc}>
                    We will giveaway 10 #8 Coins to our Discord members and $500FTM to 5 random #8 Coin owners. ($100FTM per #8 Coin owner)
                    </div>
                </div>
                <div className={classes.itemlist}>
                    <img src={hundred} alt="hundred" className={classes.img}/>
                    <div className={classes.desc}>
                    We will commence the Reward Giveaways. The first Reward Giveaways will be held on the 28th of commencing month. The first Reward Giveaways prize and winner will be double. $8,888 X2 and 10 Winners X2.
                    </div>
                </div>
            </div>
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
    items: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down(900)]: {
            width: '90%',
        }
    },
    itemlist:{
        display: 'flex',
        marginBottom: '15px',
        [theme.breakpoints.down(900)]: {
            marginBottom: '20px',
        }
    },
    img:{
        width: '120px',
        height: '100px',
        [theme.breakpoints.down(900)]: {
            width: '70px',
            height: '60px',
        }
    },
    desc:{
        marginLeft: '60px',
        fontSize: '20px',
        color: '#ffffff',
        alignSelf: 'center',
        [theme.breakpoints.down(900)]: {
            marginLeft: '10px',
            fontSize: '18px',
            letterSpacing: '3px'
        }
    },
    footer: {
        width: '90%',
    }
})
)