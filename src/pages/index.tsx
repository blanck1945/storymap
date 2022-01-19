import { useEffect, useState } from "react";
import type { NextPage } from "next";
import TextComponent from "../components/Atoms/TextComponent/TextComponent";
import FormikController from "../components/Molecules/FormikController";
import { LoginForm } from "../forms/loginForm";
import { TextVariant, typographyWeight } from "../models/Enums/TypographyEnums";
import InstagramEmbed from 'react-instagram-embed';
// Styles
import { useStyles } from "../styles/styles";

const Login: NextPage = () => {
  const classes = useStyles();

  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const handleOnClick = async () => {
  const shareData = {
    title: 'Tap | Ruleta',
    text: 'Tirá la ruleta de premios en Moron',
    url: 'https://test-pr.vercel.app/?utm_source=Compartir&utm_medium=Compartir&utm_campaign=Ruleweb_compartir',
  };
  try {
    await navigator.share(shareData);
  } catch (err) {
    // eslint-disable-next-line
    console.warn(err);
  }
};


  return (
    <div className={classes.loginContainer}>
      <button onClick={handleOnClick}>Share</button>
    </div>
  );
};

export default Login;

// <FormikController form={LoginForm} />

{/* <TextComponent
text="Home Page"
fontSize="48px"
color="red"
weight={typographyWeight.bold}
variant={TextVariant.h1}
/> */}