import React, { useEffect, useState } from "react";
import clearCookies from "../utils/clearCookies";
import styled from "styled-components";
import FormWrapper from "../components/FormWrapper";
import HelperText from "../components/text/HelperText";
import CircularProgress from "@mui/material/CircularProgress";
import api from "../utils/api";

export default function LoadingScreen({ activeStep, setActiveStep }) {
  const [loading, setLoading] = useState(true);
  const [isPaymentSettled, setIsPaymentSettled] = useState();
  // Poll TrueLayer API to get payment status
  useEffect(() => {
    // Extract payment_id from URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has("payment_id")) {
      // If URL contains required param, set payment_id var
      const payment_id = urlParams.get("payment_id");
      // Check if paymentId is valid, if not redirect.
      getPaymentStatus(payment_id);
    } else {
      console.log("no payment_id");
    }
  }, []);

  // Poll truelayer API to get Status
  const getPaymentStatus = async (payment_id) => {
    try {
      api
        .get(`/pay/status/${payment_id}`, {
          truelayerPaymentId: payment_id,
        })
        .then(async (response) => {
          const paymentStatus = response.data;

          if (paymentStatus === "settled" || paymentStatus === "executed") {
            setLoading(false);
            setIsPaymentSettled(true);
          } else if (paymentStatus === "failed") {
            setLoading(false);
            setIsPaymentSettled(false);
          } else {
            setTimeout(getPaymentStatus.bind(null, payment_id), 2000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch {
      console.log("Error: could not retrieve payment status");
    }
  };

  return (
    <div>
      {loading ? (
        <React.Fragment>
          <Wrapper>
            <CircularProgress size={"28px"} style={{ color: "white" }} />
          </Wrapper>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FormWrapper>
            {isPaymentSettled ? (
              <React.Fragment>
                <HelperWrap>
                  <HelperText text={"Payment Successful"} />
                </HelperWrap>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <HelperWrap>
                  <HelperText text={"Payment Failed"} />
                </HelperWrap>
              </React.Fragment>
            )}
          </FormWrapper>
        </React.Fragment>
      )}
    </div>
  );
}

// Styled components
const HelperWrap = styled.div`
  margin-bottom: 20px;
  margin-top: 0px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: black;
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
`;
