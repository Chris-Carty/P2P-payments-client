import React from "react";
import styled from "styled-components";
import PartyPopper from "../assets/party-popper.png";
import FormWrapper from "./FormWrapper";
import HelperText from "./text/HelperText";
import Subtitle from "./text/Subtitle";

export default function SuccessScreen() {
  return (
    <FormWrapper>
      <ImgWrap>
        <img src={PartyPopper} alt="party-popper" height="120px" />
      </ImgWrap>
      <SubtitleWrap>
        <Subtitle text={"Your Gift is on the way to Laura!"} />
      </SubtitleWrap>
      <HelperWrap>
        <HelperText text={"Laura sends a HUGE thank you."} />
      </HelperWrap>
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
