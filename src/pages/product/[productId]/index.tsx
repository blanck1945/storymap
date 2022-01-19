import React from "react";
import { useRouter } from "next/router";
// Atoms
import TextComponent from "../../../components/Atoms/TextComponent/TextComponent";
// Enums
import {
  TextVariant,
  typographyWeight,
} from "../../../models/Enums/TypographyEnums";

const productId = () => {
  const router = useRouter();

  return (
    <div>
      <TextComponent
        text="Details about product"
        fontSize="48px"
        color="brown"
        weight={typographyWeight.bold}
        variant={TextVariant.h1}
      />
      <TextComponent
        text={router.query.productId}
        fontSize="24px"
        color="red"
        weight={typographyWeight.medium}
        variant={TextVariant.h3}
      />
    </div>
  );
};

export default productId;
