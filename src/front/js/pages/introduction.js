import React from "react";
import { Link } from "react-router-dom";

export const IntroductionPage = () => {
  return (
    <div id="introduction">
      <img
        id="introductionPic"
        src="https://s3-alpha-sig.figma.com/img/ddea/e14e/8c6679f5fe16f6ff20eecafe1d6a9302?Expires=1660521600&Signature=UBzAyO-0ko9EedRDUhdO7l7fcmoYPRf5O2DmAv1ZK1cT-5o~Xpr1yOe-csiPKf3eOU429Xey8~-6QBIyiQUVu9Wic~RE-Vkfd4CBxBEz1x2uBGj-zPooSA6hcOWZaTEbTh1JEMIvUqNuXxt84eAwgh2RCHcWuxOVkn1p~Zbuc-3BQbs1cEGJxfH-WB8uNFXx4ZfXAC9ATINz09qQRTfNZ2eYMdvR7fUeUxGQp1yuAySpAZpqyxjECz9tl6rztqd4kfeEWbVp3GexIBPDko~zb-udM5HdeFms~A2Bzo5nTijI1ynJi2Nlkz77lBdSvXc4RixL6nIBfejEtPf~Vov85Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
      <div id="joinForm">
        <h1>Start Here</h1>
        <form>
          <div id="sex">
            <h3>I am:</h3>
            <h3>I am looking for:</h3>
          </div>
          <div id="sexButton">
            <div id="genderButtonLeft">
              <button type="button" style={{borderRadius:"5px", background: "#D98B8B", borderColor: "#D98B8B", width: "7rem"}}>Male</button>
              <button type="button" style={{borderRadius:"5px", background: "#D98B8B", borderColor: "#D98B8B", width: "7rem"}}>Female</button>
            </div>
            <div id="genderButtonRight">
            <button type="button" style={{borderRadius:"5px", background: "#D98B8B", borderColor: "#D98B8B", width: "7rem"}}>Male</button>
            <button type="button" style={{borderRadius:"5px", background: "#D98B8B", borderColor: "#D98B8B", width: "7rem"}}>Female</button>
            </div>
          </div>
          <div id="joinSection">
            <Link to={"/registration"}>
            <button id="joinButton" type="button" style={{borderRadius:"5px", background: "#D98B8B", borderColor: "#D98B8B", width: "7rem"}}>Join Now!</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
