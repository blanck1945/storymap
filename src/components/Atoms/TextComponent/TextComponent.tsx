import React from "react";
import { Typography } from "@material-ui/core";

// Styles
import { useStyles } from "./styles";
// Enums
import {
  TextVariant,
  typographyConstants,
  typographyWeight,
} from "../../../models/Enums/TypographyEnums";

export interface TextComponentProps {
  text: string | string[] | undefined;
  typographyClass?: typographyConstants;
  variant: TextVariant;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  weight?: typographyWeight;
  fontWeight?: number;
  textClass?: string;
}

const TextComponent = ({
  text,
  typographyClass = typographyConstants.generic,
  color = "green",
  fontFamily = "Confortaa",
  fontWeight = 600,
  fontSize = "16px",
  weight = typographyWeight.regular,
  variant,
  textClass,
}: TextComponentProps) => {
  const classes = useStyles();

  return (
    <Typography
      className={`${classes[typographyClass]} ${classes[weight]} ${textClass}`}
      variant={variant}
      style={{
        color,
        fontFamily,
        fontWeight,
        fontSize,
      }}
    >
      {text}
    </Typography>
  );
};

export default TextComponent;
