import { makeStyles, Theme } from "@material-ui/core";

export interface ThemeExtendend extends Theme {
  fontFamily: string;
  fontWeight: number;
  color: string;
}

export const useStyles = makeStyles(
  ({ fontFamily, fontWeight, color, ...theme }: ThemeExtendend) => ({
    SPECIAL_BOLD: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(6),
    },
    H1_MEDIUM: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.75),
    },
    H1_REGULAR: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.5),
    },
    H1_BOLD: {
      lineHeight: theme.spacing(0.17),
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(4),
    },
    H2_MEDIUM: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.5),
    },
    H2_REGULAR: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.25),
    },
    H2_BOLD: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.25),
    },
    H3_BOLD: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.8),
    },
    H3_MEDIUM: {
      fontSize: theme.spacing(2.25),
    },
    H3_REGULAR: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.25),
    },
    H4_BOLD: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2),
    },
    H4_MEDIUM: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2),
    },
    H4_REGULAR: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.6),
    },
    H5_BOLD: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.5),
    },
    H5_MEDIUM: {
      fontFamily: fontFamily,
      fontSize: theme.spacing(1.75),
      fontWeight: fontWeight,
    },
    H5_REGULAR: {
      fontFamily: fontFamily,
      fontSize: theme.spacing(2.25),
      fontWeight: fontWeight,
    },
    H6_BOLD: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(1.5),
    },
    H6_MEDIUM: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(1.5),
    },
    H6_REGULAR: {
      lineHeight: theme.spacing(0.18),
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: theme.spacing(2.2),
    },
    generic: {},
    regular: {
      fontWeight: 400,
    },
    medium: {
      fontWeight: 500
    },
    bold: {
      fontWeight: 700
    }
  })
);

/**
 *   [theme.breakpoints.down(theme.breakpoints.values.tapTablet8)]: {
        fontSize: theme.spacing(2.5),
      },
 */
