import React from 'react';
// import { Link } from "gatsby"
import {animateScroll as scroll, Link, scroller,} from 'react-scroll';
import {AppBar, Divider, IconButton, Menu, MenuItem, Toolbar, withStyles,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../pages/images/logo.svg';

const styles = (theme) => ({
    root: {
        background: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: "none",
        // [theme.breakpoints.up("sm")]: {
        //   display: "block"
        // },
        marginLeft: theme.spacing(5),
    },
    titleLink: {
        margin: '0 20px',
        cursor: 'pointer',
        fontWeight: 600
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logoNavBar: {
        maxWidth: 140,
        height: 'auto',
    },
    menuItemLink: {
        padding: '20px 30px',
        fontWeight: '600',
    },
    mobileMenuWrapper: {
        margin: 0,
        padding: 0,
    },
});

function PrimarySearchAppBar({classes}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    function scrollToTop() {
        scroll.scrollToTop();
    }

    function scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }

    const Logo = () => {
        return (
            <Link
                underline="none"
                color="inherit"
                className={classes.titleLink}
                href="/"
                to="/"
            >
                <img src={logo} className={classes.logoNavBar}/>
            </Link>
        );
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            className={classes.mobileMenuWrapper}
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link
                onClick={handleMobileMenuClose}
                activeClass="active"
                // className={classes.menuItemLink}
                to="successStories"
                spy={true}
                smooth={true}
                duration={2000}
            >
                <MenuItem className={classes.menuItemLink}>
                    Metamorfozy
                </MenuItem>
            </Link>
            <Divider/>
            <Link
                onClick={handleMobileMenuClose}
                activeClass="active"
                // className={classes.menuItemLink}
                to="experience"
                spy={true}
                smooth={true}
                duration={2000}
            >
                <MenuItem className={classes.menuItemLink}>
                    Doświadczenie
                </MenuItem>
            </Link>
            <Divider/>
            <Link
                onClick={handleMobileMenuClose}
                activeClass="active"
                to="testimondials"
                spy={true}
                smooth={true}
                duration={2000}
            >
                <MenuItem className={classes.menuItemLink}>Opinie</MenuItem>
            </Link>

            <Divider/>
            <Link
                onClick={handleMobileMenuClose}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={2000}
            >
                <MenuItem className={classes.menuItemLink}>Kontakt</MenuItem>
            </Link>
        </Menu>
    );

    return (
        <div id="back-to-top-anchor" className={classes.grow}>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Logo/>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            to="successStories"
                            spy={true}
                            smooth={true}
                            duration={1600}
                        >
                            Metamorfozy
                        </Link>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Doświadczenie
                        </Link>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            to="testimondials"
                            spy={true}
                            smooth={true}
                            duration={1300}
                        >
                            Opinie
                        </Link>

                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={1900}
                        >
                            Kontakt
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {/* {renderMenu} */}
        </div>
    );
}

export default withStyles(styles)(PrimarySearchAppBar);
