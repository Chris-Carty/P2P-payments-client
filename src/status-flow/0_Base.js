import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getCookie from "../utils/getCookie";
import clearCookies from "../utils/clearCookies";
import CloseIcon from "@mui/icons-material/Close";
import StatusScreen from "./1_StatusScreen";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/gift-logo.png";

// Steps in the status flow
const steps = ["StatusScreen"];

export default function Pay() {
  // Set activeStep in payment flow
  const storedValueAsNumber = Number(getCookie("activeStep"));
  const [activeStep, setActiveStep] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  );

  // Store step in flow as cookie
  useEffect(() => {
    document.cookie = `activeStep=${activeStep}`;
  }, [activeStep]);

  const close = () => {
    clearCookies();
    setActiveStep(0);
    window.location.reload();
  };

  // Determine which Component to render depending on which activeStep the user is at in the flow
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <StatusScreen activeStep={activeStep} setActiveStep={setActiveStep} />
        );
      case 2:
        return (
          <StatusScreen activeStep={activeStep} setActiveStep={setActiveStep} />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const cancelButton = (step) => {
    if (step === 2 || step === 0) {
      return (
        <IconButton size="small">
          <CloseIcon fontSize="small" visibility="hidden" />
        </IconButton>
      );
    } else {
      return (
        <IconButton size="small" onClick={() => close()}>
          <CloseIcon fontSize="small" />
        </IconButton>
      );
    }
  };

  return (
    <Container>
      <BodyWindow>
        <HeaderBanner>
          <CloseIcon fontSize="small" visibility="hidden" />
          <img src={Logo} alt="logo" height="25" />
          {cancelButton(activeStep)}
        </HeaderBanner>

        <Body>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <StatusScreen />
              </React.Fragment>
            ) : (
              <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
            )}
          </React.Fragment>
        </Body>
      </BodyWindow>
    </Container>
  );
}

// Styled Components
const Container = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  max-height: 100vh;
  min-height: 100vh;
  background: #242d35;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 500px) {
    justify-content: start;
  }
`;

const BodyWindow = styled.section`
  background: rgba(255, 255, 255, 255);
  font-weight: 200;
  max-width: 450px;
  min-width: 450px;
  max-height: 750px;
  min-height: 750px;
  padding: 30px 20px 20px 20px;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 500px) {
    max-width: 100%;
    min-width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    overflow-x: hidden !important;
    background: rgba(255, 255, 255, 255);
  }
`;

const HeaderBanner = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px 0px 0px;
  min-height: 50px;
  max-height: 50px;
  margin: -30px -20px;
  padding: 0px 20px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 3px 6px;

  @media (max-width: 500px) {
    min-height: 45px;
    max-height: 45px;
  }
`;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
`;
