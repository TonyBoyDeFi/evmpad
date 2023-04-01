import React from "react";
import * as s from "../styles/global";

const Home = () => {
  return (
    <s.Container ai="center">
      <s.Container ai="center">
        <s.SpacerLarge />
        <s.TextDescription fs={"89px"}>AscensionOne</s.TextDescription>
        <s.TextDescription style={{ textAlign: "center" }}>
          Safe and secure launchpad for verified projects #clicksafe
          <br/>
          Content to be added very soon!
        </s.TextDescription>
        <s.SpacerLarge />
        <s.TextDescription>{}</s.TextDescription>
      </s.Container>
    </s.Container>
  );
};

export default Home;
