/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from "@mui/styles";
import { Button, MenuItem, Select, Theme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import coin from "../assests/coin8.gif";
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
  const [approvedAmt, setApprovedAmt] = useState(0);
  const { library, account } = useWeb3React();
  const [totalMints, setTotalMints] = useState(0);
  const [approveEnabled, setApproveEnabled] = useState(true);
  const [mintEnabled, setMintEnabled] = useState(false);

  const mintPrice = 0.04;

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
      try {
        const signer = await library.getSigner();
        const WETHContract = new Contract(WETH, WETHAbi.abi, signer);
        const result = await WETHContract.approve(
          NFTContract,
          parseUnits((mints * mintPrice).toString(), "ether")
        );
        await result.wait();
        setApprovedAmt(mints * mintPrice);
        toast.success(`Approval for ${mints * mintPrice} WETH successful.`);
      } catch (err: any) {
        if (err.data && err.data.message) {
          toast.error(err.data.message);
        } else {
          toast.error(err.message);
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
        toast.error(err.message);
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
                  className={classes.apprvBtn}
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
    width: 100,
    fontSize: "1vw !important",
    marginRight: "10px !important",
    backgroundColor: "#c7953e !important",
    "&:disabled": {
      backgroundColor: "#d1aa66 !important",
    },
  },
  apprvBtn: {
    height: 55,
    width: 100,
    fontSize: "1vw !important",
    marginRight: "10px !important",
    backgroundColor: "#c7953e !important",
    "&:disabled": {
      backgroundColor: "#d1aa66 !important",
    },
  },
  mintText: {},
}));
