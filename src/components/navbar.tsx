import React, { useState, useEffect } from "react";
import { Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assests/logo.png";
import Dot from "@mui/icons-material/FiberManualRecord";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../connectors/injected-connector";
import { shortenAddress } from "../utils/util";

export const Navbar = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { activate, account, error } = useWeb3React();

  useEffect(() => {
    if (account) {
      setIsConnected(true);
    }
  }, [account]);
  useEffect(() => {
    if (error) {
      switch (error.name) {
        case "UnsupportedChainIdError":
          alert(
            "Selected network is not supported. Please switch your network to Polygon Mainnet"
          );
          break;
        case "NoEthereumProviderError":
          alert(
            "You do not have metamask installed. Please install metamask to connect to the application."
          );
          break;
        default:
          alert(error);
          break;
      }
    }
  }, [error]);
  const handleConnect = () => {
    try {
      activate(injectedConnector);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.navbar}>
        <img
          src={logo}
          className={classes.logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        {screenWidth > 900 && (
          <ul className={classes.list}>
            <li>
              <Link to="/about" className={classes.items}>
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="/roadmap" className={classes.items}>
                {" "}
                Roadmap{" "}
              </Link>
            </li>
            <li>
              <Link to="/faq" className={classes.items}>
                {" "}
                FAQ{" "}
              </Link>
            </li>
          </ul>
        )}
        <div style={{ display: "flex" }}>
          <Button
            onClick={handleConnect}
            variant="contained"
            startIcon={
              <Dot fontSize="small" color={isConnected ? "success" : "error"} />
            }
            className={`${classes.btn} btn-connect`}
          >
            {isConnected ? shortenAddress(account!) : "CONNECT"}
          </Button>
          {screenWidth < 900 && (
            <IconButton
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon className={classes.menu} />
            </IconButton>
          )}
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem component={Link} to="/townhall" onClick={handleClose}>
            Townhall
          </MenuItem>
          <MenuItem component={Link} to="/roadmap" onClick={handleClose}>
            Roadmap
          </MenuItem>
          <MenuItem component={Link} to="/faq" onClick={handleClose}>
            Faq
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    // position: 'fixed',
    // top: 0,
    width: "100%",
    backgroundColor: "black",
    height:120,
    marginTop: '6.5vh'
  },
  navbar: {
    width:"100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(900)]: {
      justifyContent: "space-around",
    },
  },
  list: {
    listStyleType: "none",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "10px",
    },
  },
  items: {
    marginRight: "40px",
    fontSize: "2vw",
    color: "white",
    cursor: "pointer",
    fontFamily: "'Roboto Slab', serif",
    textDecoration: "none",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    [theme.breakpoints.up(1500)]: {
      marginRight: "110px",
    },
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  btn: {
    cursor: "pointer",
    display: "block",
    marginLeft: "20px",
    height: "50px",
    backgroundColor: "#c7953e !important",
    width: "18vw",
    border: "none",
    color: "black",
    fontSize: "20px",
    fontFamily: "'Roboto Slab', serif !important",
    [theme.breakpoints.down(900)]: {
      marginTop: "50px",
      height: "45px",
      width: "25vw",
    },
    [theme.breakpoints.up(500)]: {
      marginTop: "70px",
      height: "45px",
      width: "25vw",
    },
  },
  logo: {
    cursor: "pointer",
    [theme.breakpoints.down(900)]: {
      width: "45vw",
      height: "13vh",
    },
  },
  menu: {
    color: "#ffffff",
    marginTop: "35px",
    transform: "scale(1.4)",
  },
}));
