import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface PostIdProps {
  product: any;
}

const postId = ({ product }: PostIdProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div>
      <div>
        <h3>{product.id}. </h3>
        <h2>{product.name}</h2>
        <h3>{product.price} </h3>
      </div>
      <p>{product.desciption} </p>
    </div>
  );
};

export default postId;

export const getStaticPaths = async () => {
  const { data } = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  const paths = data.map((post: any) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (ctx: any) => {
  const { params } = ctx;
  console.log({msg: 'Regenerating product' + params.postId})

  try {
    const { data: product } = await axios({
      method: "GET",
      url: `http://localhost:4000/products/${params.postId}`,
    });

    return {
      props: {
        product,
      },
      revalidate: 100,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
