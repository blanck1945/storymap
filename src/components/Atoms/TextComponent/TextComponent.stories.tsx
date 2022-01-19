import React from "react";
// Enums
import {
  TextVariant,
  typographyColors,
  typographyConstants,
  typographyFamily,
} from "../../../models/Enums/TypographyEnums";
// Components
import TextComponent from "./TextComponent";

const obj = {
  title: "Atom/TextComponent",
  component: TextComponent,
};

export default obj;

export const h1MediumBlue = () => (
  <TextComponent
    typographyClass={typographyConstants.H1_MEDIUM}
    variant={TextVariant.h1}
    fontFamily={typographyFamily.openSans}
    color="blue"
    text="Texto de ejemplo - h1 medium blue"
  />
);

export const h2MediumBlue = () => (
  <TextComponent
    typographyClass={typographyConstants.H2_MEDIUM}
    variant={TextVariant.h2}
    color="blue"
    text="Texto de ejemplo - h2 medium blue"
  />
);

export const h3MediumBlue = () => (
  <TextComponent
    typographyClass={typographyConstants.H3_MEDIUM}
    variant={TextVariant.h3}
    color="blue"
    text="Texto de ejemplo - h3 medium blue"
  />
);

export const h4MediumBlue = () => (
  <TextComponent
    typographyClass={typographyConstants.H4_MEDIUM}
    variant={TextVariant.h4}
    color="blue"
    text="Texto de ejemplo - h4 medium blue"
  />
);
