import React from "react";
import Link from "next/link";
import { AppRouter } from "./router";

const Navigator = () => {
  return (
    <nav>
      {AppRouter.map((link: any) => {
        return (
          <Link key={link.name} href={link.path}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigator;
