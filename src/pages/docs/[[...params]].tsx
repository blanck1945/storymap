import React from "react";
import { useRouter } from "next/router";

const docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  console.warn({ params });

  return (
    <div>
      <h1>
        Docs Page: {params[0] && params[0]} {params[1] && "- " + params[1]}
      </h1>
    </div>
  );
};

export default docs;
