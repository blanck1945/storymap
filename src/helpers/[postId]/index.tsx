import React from "react";
import axios from "axios";

const postId = () => {
  return <div></div>;
};

export default postId;

export const getStaticProps = async (ctx: any) => {
  const { params } = ctx;
  const { data } = await axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  });

  return {
    props: {
      posts: data.slice(0, 5),
    },
  };
};
