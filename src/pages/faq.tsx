import React, { ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Footer } from "../components/footer";

export const Faq = (): ReactElement => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <div className={classes.header}>
                        FAQ
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    WTF ARE NFTs?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    NFT stands for Non-Fungible Token. Fungibility is whether or not something can be replicated. NFTs are completely unique and non-interchangeable, which is what makes them non-fungible!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    WHAT IS CRYPTOVALE?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    Cryptovale is a small fashionable town on the Polygon blockchain. It consists of 4444 girls that are inspired by Y2K fashion and 2000s pop culture.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    What is the purpose of Cryptovale?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    Cryptovale was created by a queer black-asian-Canadian artist to show women and other marginalized groups that we are HERE—and if we can do it, then you can do it too. The Metaverse and Cryptovale are a community for all. There are no gatekeepers or elites here, just a community of like-minded people that want to further the representation of women in crypto.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    Is there a presale?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    Cryptovale won’t be having a presale to allow everyone a fair shot.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    Why is Cryptovale on Polygon?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    We decided to host Cryptovale on Polygon because of the high gas fees on the Ethereum blockchain. High gas fees mean that newcomers and people who aren’t swimming in ETH are often shut out. Cryptovale isn’t only meant for the rich—we want everyone to stop by!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    How do I buy a Cryptovale NFT?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    You can mint a Cryptovale NFT here, on our website! Mint day is TBD.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    How many Cryptovale NFTs can I mint?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    You can mint 10.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    How much will Cryptovale NFTs cost?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    0.04 ETH + gas.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "black"}} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="h4" sx={{ width: '70%', flexShrink: 0 }}>
                                    What will Cryptovale give back?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="common.white" variant="h5">
                                    Cryptovale will be giving away lots of NFTs and donating 5% of proceeds to women’s health as well as 5% to victims of domestic violence.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        color: '#0000ff',
        fontSize: '30px',
        textAlign:'center',
        [theme.breakpoints.down(900)]: {
            fontSize: '25px',
            paddingBottom: '10px'
        }
    },
    faq: {
        margin: '25px auto 25px auto',
        backgroundColor: '#000000',
        width: '70%',
        [theme.breakpoints.down(900)]: {
            width: '90%',
            marginLeft: '7%',
            paddingBottom: '10px'
        }
    },
    txt:{
        color: '#ffffff',
        fontSize: '30px',
        fontFamily: 'Vcr',
        padding: '15px 15px 15px 15px',
    },
    footer: {
        position: 'relative',
        width: '90%',
    }
}))