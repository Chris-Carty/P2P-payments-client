import React, { useEffect, useState } from "react";
import clearCookies from "../utils/clearCookies";
import styled from "styled-components";
import FormWrapper from "../components/FormWrapper";
import HelperText from "../components/text/HelperText";
import SuccessScreen from "../components/SuccessScreen";
import FailureScreen from "../components/FailureScreen";
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
            clearCookies();
          } else if (paymentStatus === "failed") {
            setLoading(false);
            setIsPaymentSettled(false);
            clearCookies();
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
          <FormWrapper>
            <ProcessingWrap>
              <HelperText text={"Processing payment"} />
              <CircularProgress size={"28px"} style={{ color: "#F9D3C0" }} />
            </ProcessingWrap>
          </FormWrapper>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FormWrapper>
            {isPaymentSettled ? (
              <React.Fragment>
                <SuccessScreen />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FailureScreen />
              </React.Fragment>
            )}
          </FormWrapper>
        </React.Fragment>
      )}
    </div>
  );
}

// Styled components
const ProcessingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
