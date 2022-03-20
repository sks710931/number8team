/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from "@mui/styles";
import { Button, MenuItem, Select, Theme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import coin from "../assests/coin8.gif";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NFTAbi from "../abis/NFT.json";
import { Footer } from "../components/footer";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { FANTOM_RPC, NFTContract } from "../config/contract";
import {  formatUnits, parseUnits } from "@ethersproject/units";
import { toast } from "react-toastify";
import { JsonRpcProvider } from "@ethersproject/providers";

const SlideImage = styled.img`
  width: 80%;
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

export const Home = (): ReactElement => {
  const classes = useStyles();
  const [mints, setMints] = useState(1);
  const { library, account } = useWeb3React();
  const [totalMints, setTotalMints] = useState(0);
  const [mintPrice, setMintPrice] = useState(0);

  const getSalePriceValue = () => {
    const price = mints * mintPrice;
    return price.toString();
  };

  const mintNFT = async () => {
    try {
      const signer = await library.getSigner();
      const NFT = new Contract(NFTContract, NFTAbi.abi, signer);
      let overRides = {
        value: parseUnits(getSalePriceValue(), "ether"),
      };
      const result = await NFT.mint(mints, overRides);
      await result.wait();
      console.log(result);
      await getTotalMinted();
      toast.success(`Successfully minted ${mints} The #8 Club NFT's.`);
    } catch (err: any) {
      if (err.data && err.data.message) {
        toast.error(err.data.message);
      } else {
        toast.error(err.message);
      }
    }
  };
  const handleMint = async () => {
    if (library && account) {
      await mintNFT();
    }
    else{
      toast.error("Please connect to your wallet to start minting.")
    }
  };
  const getTotalMinted = async () => {
    try {
      const provider = new JsonRpcProvider(FANTOM_RPC);
      const NFT = new Contract(NFTContract, NFTAbi.abi, provider);
      NFT.on("CreateTheNumber8Club", async () => {
        const mint2 = await NFT.totalSupply();
        setTotalMints(Number(formatUnits(mint2, 0)));
    });
      const totalMint = await NFT.totalSupply();
      setTotalMints(Number(formatUnits(totalMint, 0)));
      const mp = await NFT.salePrice(1);
      setMintPrice(Number(formatUnits(mp, "ether")));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getTotalMinted();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <div className={classes.main}>
            Welcome to The #8 Club.
            <div className={classes.mintBox}>
              <Typography variant="h4" className={classes.gold}>
                Minted {totalMints}/8888
              </Typography>
              <Typography variant="caption" color="primary">
                88 $FTM each
              </Typography>
              <Typography variant="caption" color="primary">
                5 per transaction, 30 per wallet
              </Typography>
              <div className={classes.mintInput}>
                <Select
                  color="primary"
                  className={classes.select}
                  id="demo-simple-select"
                  value={mints}
                  onChange={(e) => {
                    setMints(e.target.value as number);
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>{" "}
                <Button
                  className={classes.mintBtn}
                  variant="contained"
                  onClick={handleMint}
                >
                  Mint
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <StyledSlider>
            <SlideImage src={coin} alt="" />
          </StyledSlider>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <Footer />
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    color: "#ffffff",
    fontSize: "35px",
    padding: "15% 0",
    width: "90%",
    [theme.breakpoints.down(900)]: {
      width: "100%",
      padding: "18% 0",
      textAlign: "center",
    },
  },
  footer: {
    width: "90%",
  },
  mintInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gold: {
    color: "#c7953e  !important",
  },
  select: {
    marginRight: 15,
    width: 100,
    color: "yellow",
    backgroundColor: "white",
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
    [theme.breakpoints.down(900)]: {
      padding: 25,
    },
    "& span": {
      fontSize: 20,
      color: theme.palette.common.white,
    },
  },
  mintBtn: {
    height: 55,
    width: 200,
    fontSize: "1vw !important",
    marginRight: "10px !important",
    backgroundColor: "#c7953e !important",
    "&:disabled": {
      backgroundColor: "#d1aa66 !important",
    },
  },
  mintText: {},
}));
