import React from "react";
import Container from "../Container/Container";
import ContentNews from "../ContentNews/ContentNews";
import Main from "../Main/Main";
import ScrollHeader from "../ScrollHeader/ScrollHeader";

const Home = () => {
  return (
    <>
      <ScrollHeader />
      <Container />
      <Main />
      <ContentNews />
    </>
  );
};

export default Home;
