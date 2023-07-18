import React, { useState } from "react";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FormWrapper from "../components/FormWrapper";
import Subtitle from "../components/text/Subtitle";
import HelperText from "../components/text/HelperText";
import FormButton from "../components/Button";
import ErrorMsg from "../components/text/ErrorMsg";
import TsAndCs from "../components/text/TsAndCs";
import Trustpilot from "../assets/trustpilot.png";
import TextField from "@mui/material/TextField";
import validator from "validator";

export default function LandingScreen({ activeStep, setActiveStep }) {
  // Button content i.e loading
  const [buttonState, setButtonState] = useState();
  // Error messages
  const [error, setError] = useState(false);
  // Record input Email
  const [payerEmail, setPayerEmail] = useState("");

  const handleChange = (event) => {
    setPayerEmail(event.target.value);
  };

  const validateEmail = () => {
    if (validator.isEmail(payerEmail)) {
      setActiveStep(activeStep + 1);
      document.cookie = `payerEmail=${payerEmail}`;
    } else {
      // TODO: DISPLAY ERROR MESSAGE
    }
  };

  return (
    <FormWrapper>
      <SubtitleWrap>
        <Subtitle text={"Gift Laura in less"} />
        <Subtitle text={"than one minute!"} />
      </SubtitleWrap>
      <HelperWrap>
        <HelperText text={"Enter your email to get started"} />
      </HelperWrap>
      <TextField
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
          sx: {
            fontFamily: "DM Sans",
            fontSize: "16px",
            color: "#808080",
            borderRadius: 100,
            backgroundColor: "#F7F7F7",
            height: "40px",
            "& fieldset": { border: "none" },
          },
        }}
      />
      <ButtonWrap>
        <FormButton
          state={buttonState}
          buttonText={"Next"}
          onClick={() => validateEmail()}
        ></FormButton>
      </ButtonWrap>
      {error ? (
        <ErrorMsg errorText={"Please enter a valid phone number."} />
      ) : (
        <p></p>
      )}

      <TermsWrap>
        <TsAndCs />
      </TermsWrap>
      <TrustpilotWrap>
        <img src={Trustpilot} alt="logo" width="42.5%" />
      </TrustpilotWrap>
    </FormWrapper>
  );
}

// Styled Components
const SubtitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px 0px;
`;

const HelperWrap = styled.div`
  margin-bottom: 20px;
`;

const TermsWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TrustpilotWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
