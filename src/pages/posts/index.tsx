import React from "react";
import axios from "axios";
// Atoms
import TextComponent from "../../components/Atoms/TextComponent/TextComponent";
// Enums
import {
  TextVariant,
  typographyWeight,
} from "../../models/Enums/TypographyEnums";
import { Link } from "@material-ui/core";

interface PostsProps {
  products: any;
}

const postList = ({ products }: PostsProps) => {
  const UserComponent = products.map((product: any) => {
    return (
      <div>
        <Link href={`/posts/${product.id}`}>
          <h2>{product.name}</h2>
        </Link>
        <h3>{product.price}</h3>
      </div>
    );
  });

  return (
    <div>
      <TextComponent
        text="Lista de posteos"
        fontSize="48px"
        color="blue"
        weight={typographyWeight.bold}
        variant={TextVariant.h1}
      />
      <div>{UserComponent}</div>
    </div>
  );
};

export default postList;

export const getStaticProps = async () => {
  const { data: products } = await axios({
    method: "GET",
    url: "http://localhost:4000/products",
  });

  return {
    props: {
      products,
    },
  };
};
