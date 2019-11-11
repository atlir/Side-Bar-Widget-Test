import React from 'react';
import { Drawer, Grid, makeStyles, Typography, Button, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import KeyboardIcon from './icons/Keyboard';
import ReadPageIcon from './icons/ReadPage';
import ContrastIcon from './icons/Contrast';
import AnimationIcon from './icons/Animation';
import BiggerTextIcon from './icons/BiggerText';
import LegibleFontsIcon from './icons/LegibleFonts';
import CursorIcon from './icons/Cursor';
import TooltipsIcon from './icons/Tooltips';
import LinkIcon from './icons/Link';
import StructureIcon from './icons/Structure';
import FeedbackIcon from './icons/Feedback';
import GearIcon from './icons/Gear';

const useStyles = makeStyles({
    header: {
        backgroundColor: '#006DD5',
        height: 50,
        color: 'white',
        flexShrink: 0,
        padding: '0 14px 0',
        position: 'sticky',
        top: 0,
    },

    footer: {
        backgroundColor: '#f7f8f9',
        paddingTop: 13,
        paddingBottom: 17,
        paddingLeft: 14,
        paddingRight: 14,
    },

    footer__text: {
        fontSize: 10,
    },

    settingsContainer: {
        textTransform: 'uppercase',
        fontWeight: 900,
        padding: '12px 0 13px',
    },

    box: {
        height: 39,
        width: 39,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        fontSize: 12,
        height: 39,
        fontFamily: 'Roboto, sans-serif',
        margin: 0,
        whiteSpace: 'nowrap',
        borderRadius: 0,
        textTransform: 'none',
        fontWeight: 'normal',
        '&:not(:first-child)': {
            borderLeft: '1px solid #e3e6e9',
        },
    },

    headerTitle: {
        marginRight: 'auto',
    },

    tilesContainer: {
        flexWrap: 'nowrap',
        border: '1px solid #e3e6e9',
        marginBottom: 14,
    },

    firstMenuColumn: {
        borderRight: '1px solid #e3e6e9',
    },

    tile: {
        width: '100%',
        padding: 16,
        cursor: 'pointer',
        borderBottom: '1px solid #e3e6e9',
        '&:last-child': {
            borderBottom: 'none',
        },
    },

    tileName: {
        color: '#A0A2AE',
        fontWeight: 100,
        fontSize: 12,
        width: '100%',
    },

    headerClose: {
        marginLeft: 'auto',
        fontWeight: 200,
        fontSize: 20,
        cursor: 'pointer',
    },

    menuContainer: {
        width: '100%',
        flexGrow: '2',
        padding: 14,
    },

    mainGrid: {
        width: 289,
        height: '100%',
        flexWrap: 'nowrap',
    },

    drawer: {
        boxShadow: '0 21px 48px 0 rgba(14, 32, 55, 0.14)',
        '& > .MuiDrawer-paper.MuiDrawer-paperAnchorRight': {
            borderTopLeftRadius: 5,
        },
        '& > .MuiBackdrop-root': {
            opacity: '0 !important',
        },
    },

    accent: {
        color: '#0182f9',
    },
    success: {
        color: '#7ebc00',
        fontSize: 14,
    },
});

const Sidebar = ({ open, onClose }) => {
    const classes = useStyles();

    return (
        <Drawer className={classes.drawer} open={open} anchor="right" onClose={onClose}>
            <Grid className={classes.mainGrid} container direction="column">
                <Grid container alignItems="center" justify="center" className={classes.header}>
                    <Typography variant="subtitle1" className={classes.headerTitle}>
                        Accessibility Menu
                    </Typography>
                    <CloseIcon className={classes.headerClose} onClick={onClose} />
                </Grid>
                <Grid container className={classes.menuContainer}>
                    <Grid container className={classes.tilesContainer}>
                        <Grid container direction="column" className={classes.firstMenuColumn}>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <KeyboardIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Keyboard Nav
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <ContrastIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Contrast +
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <BiggerTextIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Bigger Text
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <CursorIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Big Cursor
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <LinkIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Highlight Links
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column">
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <ReadPageIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Read Page
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <AnimationIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Stop Animations
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <LegibleFontsIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Legible Fonts
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <TooltipsIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Tooltips
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.tile}
                                direction="column"
                                alignItems="center"
                            >
                                <StructureIcon />
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    className={classes.tileName}
                                >
                                    Page Structure
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justify="center"
                        wrap="nowrap"
                        className={classes.tilesContainer}
                    >
                        <Button fullWidth className={classes.button}>
                            Reset All
                        </Button>
                        <Button fullWidth className={classes.button}>
                            Move/Hide panel
                        </Button>
                    </Grid>
                    <Grid container className={classes.tilesContainer}>
                        <Button fullWidth className={classes.button}>
                            White label this widget
                        </Button>
                    </Grid>
                    <Grid
                        container
                        wrap="nowrap"
                        className={classes.settingsContainer}
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid container>
                            <Typography className={classes.accent}>user</Typography>
                            <Typography>Way</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container wrap="nowrap">
                                <Box component="div" className={classes.box}>
                                    <FeedbackIcon />
                                </Box>
                                <Box component="div" className={classes.box}>
                                    <GearIcon />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    className={classes.footer}
                    justify="space-between"
                    alignItems="center"
                >
                    <Typography className={classes.footer__text}>
                        Accessibility by UserWay.org
                    </Typography>
                    <Typography className={classes.success}>DONATE</Typography>
                </Grid>
            </Grid>
        </Drawer>
    );
};

export default Sidebar;
