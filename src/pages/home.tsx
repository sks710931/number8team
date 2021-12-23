import { makeStyles } from "@mui/styles";
import { Button, MenuItem, Select, Theme, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import image1 from "../assests/image1.jpeg";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Footer } from "../components/footer";

const SlideImage = styled.img`
  width: 100%;
  height: 65vh;
  object-fit: cover;
  @media only screen and (max-width: 900px) {
    height: 50vh;
  }
`;

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const slides = [
  {
    image: image1,
  },
];

export const Home = (): ReactElement => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [mints, setMints] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <div className={classes.main}>
            Welcome to Cryptovale-- The most fashionable town of the blockchain.
            <div className={classes.mintBox}>
              <Typography variant="h4" color="primary">
                Minted 200/4444
              </Typography>
              <Typography variant="caption" color="primary">
                0.04 WETH each
              </Typography>
              <Typography variant="caption" color="primary">
                5 per transaction, 10 per wallet
              </Typography>
              <div className={classes.mintInput}>
                <Select
                color="primary"
                    className={classes.select}
                  id="demo-simple-select"
                  value={mints}
                  onChange={(e)=>setMints(e.target.value as number)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>{" "}
                <Button className={classes.mintBtn} variant="contained">
                  Approve
                </Button>
                <Button className={classes.mintBtn} variant="contained">
                  Mint
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <StyledSlider>
            <div className={classes.arrow} onClick={prevSlide}>
              {" "}
              &#60;{" "}
            </div>
            {slides.map((slide, index) => {
              return (
                <div key={index}>
                  {index === current && <SlideImage src={slide.image} alt="" />}
                </div>
              );
            })}
            <div className={classes.arrow} onClick={nextSlide}>
              {" "}
              &#62;{" "}
            </div>
          </StyledSlider>
        </Grid>
      </Grid>
      <div className={classes.footer}>
                <Footer/>
            </div>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    color: "#ffffff",
    fontSize: "35px",
    textAlign: "center",
    padding: "15% 0",
    width: "90%",
    [theme.breakpoints.down(900)]: {
      width: "100%",
      padding: "18% 0",
    },
  },
  footer:{
      width:"90%"
  },
  mintInput:{
      display:"flex",
    alignItems:"center",
    justifyContent: "center"
  },
  select:{
    marginRight: 15,
    width: 100,
    color: "yellow",
    backgroundColor: "white"
  },
  arrow: {
    color: "#ffffff",
    fontSize: "35px",
    padding: "10px",
    [theme.breakpoints.down(900)]: {
      fontSize: "25px",
    },
  },
  mintBox: {
    display: "flex",
    justifyContent: "flex-start !important",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: 50,
    padding: 20,
    "& span": {
      fontSize: 20,
      color: theme.palette.common.white,
    },
  },
  mintBtn: {
    height: 55,
    width: 100,
    fontSize: "1vw !important",
  },
  mintText: {},
}));
