import {useState, useEffect} from 'react'
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png'

export const Navbar = () => {
    let navigate = useNavigate();
    const classes = useStyles();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
      <nav className={classes.nav}>
            <div className={classes.navbar}>
                <img src={logo} className={classes.logo} alt="logo" onClick={() => navigate('/')}/>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className={classes.list}>
                        <li><Link to='/townhall' className={classes.items}> town hall </Link></li>
                        <li><Link to='/roadmap' className={classes.items}> road map </Link></li>
                        <li><Link to='/team' className={classes.items}> team </Link></li>
                        <li><Link to='/faq' className={classes.items}> faq </Link></li>
                    </ul>
                )}
                <button onClick={toggleNav} className={classes.btn}>CONNECT</button>
            </div>
      </nav>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    nav: {
        position: 'fixed',
        top: 15,
        width: '100%',
        height: '120px',
        backgroundColor: '#ed3093',
    },
    navbar:{
        display: 'flex',
        justifyContent: 'center',
    },
    list: {
        listStyleType: 'none',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: '70px',
        [theme.breakpoints.down(500)]: {
            flexDirection: 'column',
            height: 'auto'
        }
    },
    items: {
        marginRight: '40px',
        fontSize: '30px',
        color: '#fee900',
        cursor: 'pointer',
        fontFamily: 'Excel',
        textDecoration: 'none',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    btn: {
        marginTop: '55px',
        display: 'block',
        marginLeft: '20px',
        height: '50px',
        backgroundColor: '#000000',
        width: '170px',
        border: 'none',
        color: '#00ff18',
        fontSize: '25px',
        fontFamily: 'Vcr'
    },
    logo: {
        paddingTop: '20px',
        width: '400px',
        height: '100px',
        cursor: 'pointer'
    },
}))