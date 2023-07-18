import React, { useState } from "react";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import FormWrapper from "../components/FormWrapper";
import HelperText from "../components/text/HelperText";
import CustomAmount from "../components/CustomAmount";
import Amount from "../components/Amount";
import PayByBank from "../components/PayByBank";

export default function AmountScreen({ activeStep, setActiveStep }) {
  // Error messages
  const [error, setError] = useState(false);
  // Record payment amount selected
  const [amountA, setAmountA] = useState(false);
  const [amountB, setAmountB] = useState(false);
  const [amountC, setAmountC] = useState(true);
  // Render custom amount
  const [custom, setCustom] = useState(false);
  // Hide custom button
  const [hideButton, setHideButton] = useState(false);
  // Payment amount
  const [paymentAmount, setPaymentAmount] = useState(50.0);
  // Payer name
  const [payerName, setPayerName] = useState("Chris Carty");

  const displayCustomInput = () => {
    setCustom(true);
    setHideButton(true);
  };

  const setAmount = (selection) => {
    switch (selection) {
      case "A":
        return (
          setAmountA(true),
          setAmountB(false),
          setAmountC(false),
          setPaymentAmount(5)
        );
      case "B":
        return (
          setAmountA(false),
          setAmountB(true),
          setAmountC(false),
          setPaymentAmount(25)
        );
      case "C":
        return (
          setAmountA(false),
          setAmountB(false),
          setAmountC(true),
          setPaymentAmount(50)
        );
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <FormWrapper>
      <HelperWrap>
        <HelperText text={"1. Choose how much you want to gift"} />
      </HelperWrap>

      {custom ? (
        <React.Fragment>
          <CustomInputWrap>
            <TextField
              fullWidth
              type="number"
              onChange={(e) => setPaymentAmount(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyPoundIcon />
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
          </CustomInputWrap>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <AmountContainer>
            <AmountWrap>
              <Amount
                text={"£5"}
                isSelected={amountA}
                onClick={() => setAmount("A")}
              />
            </AmountWrap>
            <AmountWrap>
              <Amount
                text={"£25"}
                isSelected={amountB}
                onClick={() => setAmount("B")}
              />
            </AmountWrap>
            <AmountWrap>
              <Amount
                text={"£50"}
                isSelected={amountC}
                onClick={() => setAmount("C")}
              />
            </AmountWrap>
          </AmountContainer>
        </React.Fragment>
      )}
      <CustomWrap>
        <CustomAmount
          text={"Enter custom amount"}
          hideButton={hideButton}
          onClick={() => displayCustomInput()}
        />
      </CustomWrap>
      <HelperWrap2>
        <HelperText
          text={"2. Enter your fullname so Laura knows who to Thank"}
        />
      </HelperWrap2>
      <NameWrap>
        <TextField
          fullWidth
          onChange={(e) => setPayerName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
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
      </NameWrap>
      <HelperWrap3>
        <HelperText text={"3. Pay with our secure payment method"} />
      </HelperWrap3>
      <PayByBank
        payerName={payerName}
        paymentAmount={paymentAmount}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </FormWrapper>
  );
}

// Styled Components
const CustomInputWrap = styled.div`
  margin-top: -20px;
`;

const CustomWrap = styled.div`
  margin-bottom: 20px;
`;

const HelperWrap = styled.div`
  margin-bottom: 20px;
  margin-top: 0px;
`;

const HelperWrap2 = styled.div`
  margin-bottom: 20px;
  margin-top: -10px;
`;

const HelperWrap3 = styled.div`
  margin-bottom: 20px;
  margin-top: -10px;
`;

const AmountContainer = styled.div`
  margin-top: -20px;
  margin-bottom: 0px;
`;

const AmountWrap = styled.div`
  margin-bottom: 10px;
  margin-top: 0px;
`;

const NameWrap = styled.div`
  margin-top: -20px;
  margin-bottom: 30px;
`;
