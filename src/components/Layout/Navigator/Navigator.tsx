import React, { useEffect, useState } from "react";
import Link from "next/link";
// Router
import { AppRouter } from "../router";
// Styles
import { useStyles } from "./styles";
// Functions
import { getPropertyFromLocalStorage } from "../../../helpers/LocalStorageFunctions";
// Enums
import {
  LocalStorageKeyEnum,
  LocalStorageValueEnum,
} from "../../../models/Enums/LocalStorage";

const Navigator = () => {
  const classes = useStyles();
  const [ls, setLs] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLs(
        getPropertyFromLocalStorage(
          LocalStorageKeyEnum.user,
          LocalStorageValueEnum.name
        )
      );
    }
  }, []);

  return (
    <nav className={classes.navbar}>
      <p>Logo</p>
      <div className={`${classes.links}`}>
        {AppRouter.map((link: any) => {
          if (ls && link.isLog) {
            return (
              <Link key={link.name} href={link.path}>
                {link.name}
              </Link>
            );
          }

          if (!link.isLog) {
            return (
              <Link key={link.name} href={link.path}>
                <button>{link.name}</button>
              </Link>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default Navigator;
