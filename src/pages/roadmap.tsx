import { makeStyles } from "@mui/styles";
import { ReactElement } from "react";
import { Theme } from "@mui/material";

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
                ROAD MAP
            </div>
            <div className={classes.items}>
                <div className={classes.itemlist}>
                    <img src={twentyfive} alt="25" className={classes.img}/>
                    <div className={classes.desc}>
                        GIVEAWAY of 5 GIRLS
                    </div>
                </div>
                <div className={classes.itemlist}>
                    <img src={fifty} alt="50" className={classes.img}/>
                    <div className={classes.desc}>
                        5% DONATED TO SUPPORT WOMEN’S HEALTH
                    </div>
                </div>
                <div className={classes.itemlist}>
                    <img src={sevfive} alt="75" className={classes.img}/>
                    <div className={classes.desc}>
                        GIVEAWAY of 10 GIRLS
                    </div>
                </div>
                <div className={classes.itemlist}>
                    <img src={hundred} alt="hundred" className={classes.img}/>
                    <div className={classes.desc}>
                    5% DONATED TO VICTIMS OF DOMESTIC VIOLENCE
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
        marginBottom: '20px',
        [theme.breakpoints.down(900)]: {
            fontSize: '25px',
            paddingBottom: '10px',
            marginInlineStart: '10px'
        }
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
        fontSize: '30px',
        color: '#ffffff',
        alignSelf: 'center',
        [theme.breakpoints.down(900)]: {
            marginLeft: '10px',
            fontSize: '25px',
            letterSpacing: '3px'
        }
    },
    footer: {
        width: '90%',
    }
})
)