import { makeStyles } from "@mui/styles";
import { useState } from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import image1 from '../assests/image1.jpeg';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const SlideImage = styled.img`
  width: 100%;
  height: 65vh;
  object-fit: cover;
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
        image: image1
    }
]

export const Home = (): ReactElement => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);
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
                        Welcome to Cryptovale--
                        The most fashionable town of the blockchain.
                    </div>
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={6}>
                    <StyledSlider>
                        <div className={classes.arrow} onClick={prevSlide}> &#60; </div>
                        {slides.map((slide, index) => {
                        return (
                            <div key={index}>
                            {index === current && <SlideImage src={slide.image} alt="" />}
                            </div>
                        );
                        })}
                        <div className={classes.arrow} onClick={nextSlide}> &#62; </div>
                    </StyledSlider>
                </Grid>
            </Grid>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    main: {
        color: '#ffffff',
        fontSize: '35px',
        textAlign:'center',
        padding: '25% 0',
        width: '90%'
    },
    arrow: {
        color: '#ffffff',
        fontSize: '35px',
        padding: '10px'
    }
}))