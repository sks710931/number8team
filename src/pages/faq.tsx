import React, { ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Footer } from "../components/footer";

export const Faq = (): ReactElement => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <div className={classes.header}>
          <Typography className={classes.about}>FAQ</Typography>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    1. What is an NFT?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    NFT stands for “Non-fungible token” and is a cool way of
                    saying it’s a unique digital item that YOU can buy, own, and
                    trade.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    2. What is The #8 Coin?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    The #8 Coin is a collection of 8888 unique NFTs on the
                    Fantom Network. Its sole purpose is to reward its holders.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    3. Is there a presale?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    The #8 Club won’t be having presale to allow everyone a fair
                    shot.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    4. How many #8 coin NFTs can I mint?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    You can mint 30 per wallet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    5. How much will #8 coin NFTs cost?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    88 $FTM + gas.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    6. Where does my NFT go after I purchase a #8 coin?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    Your #8 coin NFT will appear in whatever address, or
                    connected wallet you used to purchase the #8 coin. You can
                    see your freshly minted NFT directly on your PaintSwap under
                    “My Assets”.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    7. What can I do with my #8 coin / How can I trade them?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    You are free to do anything with them under a non-exclusive
                    license. The #8 coins adheres to the ERC-721 standards so
                    you can trade them on platforms like PaintSwap.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    8. That sounds great, how do I get in?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    Join our Discord ({" "}
                    <a href="https://discord.gg/qeDEHv4ga7">
                      https://discord.gg/qeDEHv4ga7
                    </a>{" "}
                    ) server or Twitter ({" "}
                    <a href="https://twitter.com/TheNumber8Club">
                      https://twitter.com/TheNumber8Club
                    </a>{" "}
                    ) account and jump in on the conversation.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "#c7953e" }}
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h5"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    9. What about Tokenomics?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    1 #8 coin = 1 lifetime entry to rewards giveaway. Once all
                    8888 #8 coins are minted, the capital raised from minting
                    will be invested in $FHM, nodes and stable yield farms. Each
                    specific days of month, profit generated from the
                    investments will be given away to random holders. We have
                    reserved 100 #8 coins to giveaway. Most of these will be
                    given out during the marketing phase.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <Footer />
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        color: '#0000ff',
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: '300',
        height: '35px',
        display: 'flex',
        marginBottom:"50px",
        marginTop: 60,
        justifyContent: "center",
        [theme.breakpoints.down(900)]: {
            fontSize: '25px',
            paddingBottom: '10px',
            marginInlineStart: '10px'
        }
    },
    about:{
        borderRadius: 5,
        fontSize: '22px !important',
        textTransform: "uppercase",
        color:"black",
        backgroundColor: "#c7953e",
        width: "200px"
    },
  faq: {
    margin: "25px auto 25px auto",
    backgroundColor: "#c7953e",
    width: "70%",
    [theme.breakpoints.down(900)]: {
      width: "90%",
      marginLeft: "7%",
      paddingBottom: "10px",
    },
  },
  txt: {
    color: "#ffffff",
    fontSize: "30px",
    fontFamily: "'Roboto Slab', serif !important",
    padding: "15px 15px 15px 15px",
  },
  footer: {
    position: "relative",
    width: "90%",
  },
}));
