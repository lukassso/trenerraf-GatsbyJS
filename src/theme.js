import { createMuiTheme } from '@material-ui/core/styles';

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

import Montserrat from './fonts/Montserrat-Regular.ttf';

const montserrat = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Montserrat'),
    local('Montserrat-Regular'),
    url(${Montserrat}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
};

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
      type: "light"
    },
    primary: {
      light: "#213b87",
      main: "#283766",
      dark: "#122254"
      
    },
    secondary: {
      main: "#FDC100"
    },
    background: {
      default: "#F6F6F6"
    },
    warning: {
      main: "#ffd200"
    },
    error: {
      main: "#f44336" 
    },
    info: {
      main: "#ffd200"
    },
    success: {
      main: "#4caf50"
    },
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161"
    },
    text: {
      primary: "#283766",
      secondary: "",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "#f6f6f6",
      disabled: "#f6f6f6"
    },
  },
  spacing: 2,
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: key => `@media (min-width:${values[key]}px)`
  },
  typography: {
    fontFamily: "Montserrat, Roboto",
    fontSize: 13,
    h1: {
      fontSize: "2.5rem",
      lineHeight: 1.5
    },
    h2: {
      fontSize: "2rem",
      lineHeight: 1.5
    },
    h3: {
      fontSize: "1.6rem",
      lineHeight: 1.5
    },
    h4: {
      fontSize: "1.4rem",
      lineHeight: 1.4
    },
    h5: {
      fontSize: "0.8rem",
      lineHeight: 1.3
    },
    h6: {},
    button: {
      color: "#122254",
      bgColor: "#f2662b"
    },
    subtitle1: {
      color: "#359cd6"
    },
    subtitle2: {},
    body1: {},
    body2: {},
    caption: {},
    overline: {},
    srOnly: {},
    inherit: {}
  },
   overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [montserrat]
      },
    },
  },
});

export default theme;