import React from "react";
import Link from "next/link";
import TextComponent from "../../components/Atoms/TextComponent/TextComponent";
import {
  TextVariant,
  typographyWeight,
} from "../../models/Enums/TypographyEnums";

const productArr = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];

const product = () => {
  return (
    <div>
      <TextComponent
        text="Product Page"
        fontSize="48px"
        color="brown"
        weight={typographyWeight.bold}
        variant={TextVariant.h1}
      />
      <ul>
        {productArr.map((el) => {
          return (
            <Link href={`/product/${el.id}`}>
              <li>{el.name} </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default product;
