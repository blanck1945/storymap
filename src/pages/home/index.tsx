import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { LoginContenxt } from "../../context/LoginContext";
import { handlerNavigationOnClick } from "../../helpers/RouterFunctions";

const Home = () => {
  const router = useRouter();

  const {
    state: { isLog },
  } = useContext(LoginContenxt);

  useEffect(() => {
    console.log({ isLog });
  }, []);

  return (
    <div>
      <p>Home page</p>
      <button onClick={() => handlerNavigationOnClick("/product", router)}>
        Place Order
      </button>
    </div>
  );
};

export default Home;
