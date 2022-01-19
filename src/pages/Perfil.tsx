import React from "react";
import TextComponent from "../components/Atoms/TextComponent/TextComponent";
import { TextVariant, typographyWeight } from "../models/Enums/TypographyEnums";

const perfil = () => {
  return (
    <div>
      <TextComponent
        text="Perfil Page"
        fontSize="48px"
        color="blue"
        weight={typographyWeight.bold}
        variant={TextVariant.h1}
      />
    </div>
  );
};

export default perfil;
