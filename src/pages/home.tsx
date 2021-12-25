/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from "@mui/styles";
import { Button, MenuItem, Select, Theme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import image2 from "../assests/3192.png";
import image3 from "../assests/3380.png";
import image4 from "../assests/4266.png";
import image5 from "../assests/3417.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WETHAbi from "../abis/WETH.json";
import NFTAbi from "../abis/NFT.json";
import { Footer } from "../components/footer";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { NFTContract, WETH } from "../config/contract";
import { formatEther, formatUnits, parseUnits } from "@ethersproject/units";
import { toast } from "react-toastify";

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
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
];

export const Home = (): ReactElement => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [mints, setMints] = useState(1);
  const [approvedAmt, setApprovedAmt] = useState(0);
  const [tick, setTick] = useState(0);
  const { library, account } = useWeb3React();
  const [totalMints, setTotalMints] = useState(0);
  const [approveEnabled, setApproveEnabled] = useState(true);
  const [mintEnabled, setMintEnabled] = useState(false);

  const length = slides.length;
  const mintPrice = 0.04;
  const nextSlide = () => {
    const val = current === length - 1 ? 0 : current + 1;
    setCurrent(val);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const timer = () => {
    setTick((tick) => tick + 1);
  };
  useEffect(() => {
    const timed = setInterval(timer, 3000);
    return () => clearInterval(timed);
  }, []);

  useEffect(() => {
    nextSlide();
  }, [tick]);

  useEffect(() => {
    const getAllowance = async () => {
      const signer = await library.getSigner();
      const WETHContract = new Contract(WETH, WETHAbi.abi, signer);
      const allowance = await WETHContract.allowance(account, NFTContract);
      const aprvdAmt = Number(formatEther(allowance));
      setApprovedAmt(aprvdAmt);
      if (aprvdAmt >= mintPrice * mints) {
        setApproveEnabled(false);
        setMintEnabled(true);
      } else {
        setApproveEnabled(true);
        setMintEnabled(false);
      }
      console.log(mintPrice);
    };
    if (library && account) {
      getAllowance();
    }
  }, [library, account, approvedAmt]);

  const handleApprove = async () => {
    if (library && account) {
      try{
        const signer = await library.getSigner();
        const WETHContract = new Contract(WETH, WETHAbi.abi, signer);
        const result = await WETHContract.approve(
          NFTContract,
          parseUnits((mints * mintPrice).toString(), "ether")
        );
        await result.wait();
        setApprovedAmt(mints * mintPrice);
        toast.success(`Approval for ${mints * mintPrice} WETH successful.`);
      }
      catch(err:any){
        if (err.data && err.data.message) {
          toast.error(err.data.message);
        } else {
          toast.error(err.message)
        }
      }
    } else {
      alert("Please connect your Metamask wallet to the application");
    }
  };

  const handleSelectMintChange = async (num: number) => {
    if (library && account) {
      console.log(mintPrice * num);
      const signer = await library.getSigner();
      const WETHContract = new Contract(WETH, WETHAbi.abi, signer);
      const allowance = await WETHContract.allowance(account, NFTContract);
      const aprvdAmt = Number(formatEther(allowance));
      setApprovedAmt(aprvdAmt);
      console.log(aprvdAmt);
      if (aprvdAmt >= mintPrice * num) {
        setApproveEnabled(false);
        setMintEnabled(true);
      } else {
        setApproveEnabled(true);
        setMintEnabled(false);
      }
    }
  };

  const mintNFT = async () => {
    try {
      const signer = await library.getSigner();
      const NFT = new Contract(NFTContract, NFTAbi.abi, signer);
      const result = await NFT.mint(account, mints);
      await result.wait();
      console.log(result);
      const WETHContract = new Contract(WETH, WETHAbi.abi, signer);
      const allowance = await WETHContract.allowance(account, NFTContract);
      const aprvdAmt = Number(formatEther(allowance));
      setApprovedAmt(aprvdAmt);
      await getTotalMinted();
      toast.success(`Successfully minted ${mints} cryptovale girls.`);
      if (aprvdAmt >= mintPrice * mints) {
        setApproveEnabled(false);
        setMintEnabled(true);
      } else {
        setApproveEnabled(true);
        setMintEnabled(false);
      }
    } catch (err: any) {
      if (err.data && err.data.message) {
        toast.error(err.data.message);
      } else {
        toast.error(err.message)
      }
    }
  };
  const handleMint = async () => {
    if (library && account) {
      await mintNFT();
    }
  };
  const getTotalMinted = async () => {
    if (library) {
      try {
        const signer = await library.getSigner();
        const NFT = new Contract(NFTContract, NFTAbi.abi, signer);
        const totalMint = await NFT.totalMint();
        setTotalMints(Number(formatUnits(totalMint, 0)));
      } catch (err) {
        alert(err);
      }
    }
  };

  useEffect(() => {
    getTotalMinted();
  }, [library]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <div className={classes.main}>
            Welcome to Cryptovale-- The most fashionable town on the blockchain.
            <div className={classes.mintBox}>
              <Typography variant="h4" color="primary">
                Minted {totalMints}/4444
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
                  onChange={(e) => {
                    setMints(e.target.value as number);
                    handleSelectMintChange(e.target.value as number);
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
                  onClick={handleApprove}
                  variant="contained"
                  disabled={!approveEnabled}
                >
                  Approve
                </Button>
                <Button
                  disabled={!mintEnabled}
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
        <Footer />
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
  footer: {
    width: "90%",
  },
  mintInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    marginRight: "10px !important",
  },
  mintText: {},
}));
