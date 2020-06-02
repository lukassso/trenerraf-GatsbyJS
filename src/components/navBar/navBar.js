import React from 'react';
// import { Link } from "gatsby"
import { render } from 'react-dom';
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import {
    withStyles,
    Typography,
    Box,
    AppBar,
    IconButton,
    Toolbar,
    Badge,
    MenuItem,
    Menu,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
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
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
});

function PrimarySearchAppBar({ classes }) {
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
            >
                <img src={logo} className={classes.logoNavBar} />
            </Link>
        );
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem
                onClick={handleMobileMenuClose}
                component={Link}
                activeClass="active"
                className={classes.menuItemLink}
                to="experience"
                spy={true}
                smooth={true}
                duration={2000}
            >
                Doświadczenie
            </MenuItem>
            <MenuItem
                onClick={handleMobileMenuClose}
                component={Link}
                activeClass="active"
                className={classes.menuItemLink}
                to="testimondials"
                spy={true}
                smooth={true}
                duration={2000}
            >
                <p>Opinie</p>
            </MenuItem>
            <MenuItem
                onClick={handleMobileMenuClose}
                component={Link}
                activeClass="active"
                className={classes.menuItemLink}
                to="successStories"
                spy={true}
                smooth={true}
                duration={2000}
            >
                <p>Metamorfozy</p>
            </MenuItem>
            <MenuItem
                onClick={handleMobileMenuClose}
                component={Link}
                activeClass="active"
                className={classes.menuItemLink}
                to="contact"
                spy={true}
                smooth={true}
                duration={2000}
            >
                <p>Kontakt</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div 
        id="back-to-top-anchor"
        className={classes.grow}
        >
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Logo />
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            component={Link}
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
                            component={Link}
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
                            component={Link}
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
                            component={Link}
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
                            <MenuIcon />
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

// function PrimarySearchAppBar({ classes }) {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = (event) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };

//     const Logo = () => {
//         return (
//             <Link
//                 underline="none"
//                 color="inherit"
//                 className={classes.titleLink}
//                 href="/"
//             >
//                 <img src={logo} className={classes.logoNavBar} />
//             </Link>
//         );
//     };

//     const mobileMenuId = 'primary-search-account-menu-mobile';
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >
//             <MenuItem
//              onClick={handleMobileMenuClose}
//             component={Link}
//             href="/"
//             >
//                Doświadczenie
//             </MenuItem>
//             <MenuItem>
//                 <p>Opinie</p>
//             </MenuItem>
//             <MenuItem>
//                 <p>Metamorfozy</p>
//             </MenuItem>
//             <MenuItem>
//                 <p>Kontakt</p>
//             </MenuItem>
//         </Menu>
//     );

//     return (
//         <div className={classes.grow}>
//             <AppBar className={classes.root} position="static">
//                 <Toolbar>
//                     <Logo />
//                     <div className={classes.grow} />
//                     <div className={classes.sectionDesktop}>
//                         <Link
//                             variant="h5"
//                             underline="none"
//                             color="inherit"
//                             className={classes.titleLink}
//                             href="/#experience"
//                         >
//                             Doświadczenie
//                         </Link>
//                         <Link
//                             variant="h5"
//                             underline="none"
//                             color="inherit"
//                             className={classes.titleLink}
//                             href="/#testimondials"
//                         >
//                             Opinie
//                         </Link>
//                         <Link
//                             variant="h5"
//                             underline="none"
//                             color="inherit"
//                             className={classes.titleLink}
//                             href="/#successStories"
//                         >
//                             Metamorfozy
//                         </Link>
//                         <Link
//                             variant="h5"
//                             underline="none"
//                             color="inherit"
//                             className={classes.titleLink}
//                             href="/#contact"
//                         >
//                             Kontakt
//                         </Link>
//                     </div>
//                     <div className={classes.sectionMobile}>
//                         <IconButton
//                             aria-label="show more"
//                             aria-controls={mobileMenuId}
//                             aria-haspopup="true"
//                             onClick={handleMobileMenuOpen}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//             {renderMobileMenu}
//             {/* {renderMenu} */}
//         </div>
//     );
// }
// export default withStyles(styles)(PrimarySearchAppBar);
