import React from "react";
import styled from "styled-components";
import FormButton from "./Button";
import Warning from "../assets/warning-light.png";
import FormWrapper from "./FormWrapper";
import HelperText from "./text/HelperText";
import Subtitle from "./text/Subtitle";
import clearCookies from "../utils/clearCookies";

export default function FailureScreen() {
  const close = () => {
    clearCookies();
    window.location.replace("https://gift-laura.vercel.app/pay");
  };

  return (
    <FormWrapper>
      <ImgWrap>
        <img src={Warning} alt="party-popper" height="100px" />
      </ImgWrap>
      <SubtitleWrap>
        <Subtitle text={"Payment failed"} />
      </SubtitleWrap>
      <HelperWrap>
        <HelperText text={"Please try again."} />
      </HelperWrap>
      <FormButton buttonText={"Try again"} onClick={() => close()}></FormButton>
    </FormWrapper>
  );
}

// Styled Components
const ImgWrap = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: -20px;
`;

const SubtitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px 0px;
`;

const HelperWrap = styled.div`
  margin-bottom: 20px;
  margin-top: 0px;
`;
