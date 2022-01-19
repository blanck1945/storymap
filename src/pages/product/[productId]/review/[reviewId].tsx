import React from "react";
import { useRouter } from "next/router";
// Atoms
import TextComponent from "../../../../components/Atoms/TextComponent/TextComponent";
// Enums
import {
  TextVariant,
  typographyWeight,
} from "../../../../models/Enums/TypographyEnums";

const productId = () => {
  const router = useRouter();

  return (
    <div>
      <TextComponent
        text="Reviews about product"
        fontSize="48px"
        color="brown"
        weight={typographyWeight.bold}
        variant={TextVariant.h1}
      />
      <div
        style={{
          display: "flex",
        }}
      >
        <TextComponent
          text={`Product ${router.query.productId}:`}
          fontSize="24px"
          color="blue"
          weight={typographyWeight.medium}
          variant={TextVariant.h3}
        />
        <TextComponent
          text={`Review ${router.query.reviewId}`}
          fontSize="24px"
          color="red"
          weight={typographyWeight.medium}
          variant={TextVariant.h3}
        />
      </div>
    </div>
  );
};

export default productId;
