import { red } from "@material-ui/core/colors";
import createTheme from "@material-ui/core/styles/createTheme";

// .eslintignore
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}

declare module "@material-ui/core/styles/createTypography" {
  interface FontStyle {
    weight: {
      regular: number;
      medium: number;
      bold: number;
    };
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#F3F6FA",
      dark: "#EDF3FB",
    },
    secondary: {
      main: "#002350",
      dark: "#5B5B5B",
    },
    tertiary: {
      main: "#14D2B9",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#E5E5E5",
    },
  },
  typography: {
    weight: {
      regular: 400,
      medium: 600,
      bold: 700,
    },
    h4: {
      fontSize: "1.125rem",
      fontWeight: 700,
      fontFamily: "Comfortaa",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1rem",
      fontFamily: "Open Sans",
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: 400,
      fontFamily: "Open Sans",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:hover, &:active": {
          boxShadow: "none",
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "normal",
        fontSize: 16,
      },
      contained: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiInputBase: {
      input: {
        fontFamily: "Comfortaa, sans-serif",
        color: "#002350",
      },
    },
  },
});

export default theme;
