import React from "react";
import TextComponent from "../components/Atoms/TextComponent/TextComponent";
import { TextVariant, typographyWeight } from "../models/Enums/TypographyEnums";

const about = () => {
  return (
    <div>
      <TextComponent
        text="About Page"
        fontSize="48px"
        color="violet"
        weight={typographyWeight.bold}
        variant={TextVariant.h1}
      />
    </div>
  );
};

export default about;
