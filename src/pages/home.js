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
          <div><<div class="card" style="width: 18rem;">
          <img class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
          0$</div>
        </s.TextDescription>
        <s.SpacerLarge />
        <s.TextDescription>{}</s.TextDescription>
      </s.Container>
    </s.Container>
  );
};

export default Home;
