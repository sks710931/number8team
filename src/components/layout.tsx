import {  ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { Navbar } from './navbar';
import { Theme } from "@mui/material";

interface Props {
    children: JSX.Element;
}

export const Layout = ({children}: Props): ReactElement<Props> => {
    const classes = useStyles();
    return (
        <div style={{height:'100%'}}>
            <div className={classes.pages}>
                <Navbar/>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    pages: {
      backgroundColor: 'black',
      width: "100%",
      height: '100%',
    //   display: "flex",
    },
    content: {
        justifyContent: 'center',
        width: '80%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down(900)]: {
            width: '100%',
        }
    }
}))