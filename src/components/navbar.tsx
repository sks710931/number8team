import React, {useState, useEffect} from 'react'
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import logo from '../assests/logo.png';

export const Navbar = () => {
    let navigate = useNavigate();
    const classes = useStyles();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, []);

    const toggleNav = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setToggleMenu(!toggleMenu)
    }
    return (
      <nav className={classes.nav}>
            <div className={classes.navbar}>
                <img src={logo} className={classes.logo} alt="logo" onClick={() => navigate('/')}/>
                {(toggleMenu || screenWidth > 900) && (
                    <ul className={classes.list}>
                        <li><Link to='/townhall' className={classes.items}> town hall </Link></li>
                        <li><Link to='/roadmap' className={classes.items}> road map </Link></li>
                        <li><Link to='/team' className={classes.items}> team </Link></li>
                        <li><Link to='/faq' className={classes.items}> faq </Link></li>
                    </ul>
                )}
                <div style={{display: 'flex'}}>
                    <button className={classes.btn}>CONNECT</button>
                    {
                        (screenWidth < 900) && (
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls="long-menu"
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={toggleNav}
                            >
                                <MoreVertIcon className={classes.menu}/>
                            </IconButton>
                        )
                    }
                </div>
            </div>
      </nav>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    nav: {
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '120px',
        backgroundColor: '#ed3093',
        [theme.breakpoints.up(1500)]: {
            top: 25,
            height: '160px',
        }
    },
    navbar:{
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down(900)]: {
            justifyContent: 'space-around',
        }
    },
    list: {
        listStyleType: 'none',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: '8.5vh',
        [theme.breakpoints.down(900)]: {
            flexDirection: 'column',
            height: 'auto',
            marginTop: '0px',
        }
    },
    items: {
        marginRight: '40px',
        fontSize: '2vw',
        color: '#fee900',
        cursor: 'pointer',
        fontFamily: 'Excel',
        textDecoration: 'none',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        [theme.breakpoints.up(1500)]: {
            marginRight: '60px',
        },
        [theme.breakpoints.down(900)]: {
            width: '100%',
            textAlign: 'center',
            marginRight: '0px',
            padding: '20px 0',
        }
    },
    btn: {
        marginTop: '55px',
        display: 'block',
        marginLeft: '20px',
        height: '50px',
        backgroundColor: '#000000',
        width: '22vw',
        border: 'none',
        color: '#00ff18',
        fontSize: '1.5vw',
        fontFamily: 'Vcr',
        [theme.breakpoints.down(900)]: {
            marginTop: '50px',
            height: '45px',
            fontSize: '3.5vw',
            width: '25vw',
        }
    },
    logo: {
        paddingTop: '20px',
        width: '22vw',
        height: '12vh',
        cursor: 'pointer',
        [theme.breakpoints.down(900)]: {
            width: '45vw',
            height: '13vh'
        }
    },
    menu: {
        color: '#ffffff',
        marginTop: '35px',
        transform: 'scale(1.4)'
    }
}))