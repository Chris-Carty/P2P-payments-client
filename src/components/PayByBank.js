import React from "react";
import styled from "styled-components";
import FormButton from "../components/Button";
import Bolt from "../assets/bolt.png";
import BankLogos from "../assets/bank-logos.png";

export default function PayByBank({
  payerName,
  paymentAmount,
  activeStep,
  setActiveStep,
  ...props
}) {
  const GenerateRedirectUrl = (event) => {
    // Covert string to number
    const num = Number(paymentAmount);
    // Ensure number is 2.d.p
    const numRound = Math.round(num * 100) / 100;
    // Check if payment amount is valid i.e greater than £5.
    if (/*(numRound >= 5) & */ payerName.length > 4) {
      // Call backend to generate payment link
      document.cookie = `paymentAmount=${numRound}`;
      document.cookie = `payerName=${payerName}`;
      setActiveStep(activeStep + 1);
    } else {
      // Display error message
      // "Minimum payment amount is £5"
    }
  };

  return (
    <PayByBankWrap>
      <HeaderWrap>
        <LeftAlign>
          <img src={Bolt} alt="lightning-bolt" height="20" />
          <HeaderText>Instant Bank Transfer</HeaderText>
        </LeftAlign>
        <img src={BankLogos} alt="bank-logos" height="25" />
      </HeaderWrap>
      <BodyTextWrap>
        <BodyText>• No need to enter your account details</BodyText>
        <BodyText>• Fast and secure</BodyText>
      </BodyTextWrap>
      <FormButton
        buttonText={"Next"}
        onClick={() => GenerateRedirectUrl()}
      ></FormButton>
    </PayByBankWrap>
  );
}

// Styled Components
const PayByBankWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  margin-bottom: 20px;
  border-radius: 25px;
  background: #f7f7f7;
`;
const HeaderWrap = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const LeftAlign = styled.div`
  font-weight: 500;
  display: flex;
  font-size: 16px;
  justify-content: center;
  color: #000;
  margin: 0;
`;

const HeaderText = styled.div`
  font-weight: 500;
  display: flex;
  font-size: 16px;
  justify-content: center;
  color: #000;
  margin: 0;
  margin-left: 5px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const BodyTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -0px;
  margin-left: 20px;
`;

const BodyText = styled.p`
  font-size: 16px;
  margin-top: -10px;
  color: #808080;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
