import React, { useState, useEffect } from "react";
import getCookie from "../utils/getCookie";
import clearCookies from "../utils/clearCookies";
import styled from "styled-components";
import api from "../utils/api";
import FormWrapper from "../components/FormWrapper";
import ErrorMsg from "../components/text/ErrorMsg";
import { Payment } from "truelayer-embedded-payment-page";

export default function PaymentScreen({ activeStep, setActiveStep }) {
  // Error message state
  const [error, setError] = useState(false);

  useEffect(() => {
    // Generate unique payment link & display to user in iFrame
    const generateEmbeddedPayment = async () => {
      const paymentAmount = Number(getCookie("paymentAmount"));
      const payerEmail = getCookie("payerEmail");
      const payerName = getCookie("payerName");

      try {
        api
          .post(
            `/pay/generatePaymentLink/${paymentAmount}/${payerEmail}/${payerName}`,
            {
              paymentAmount,
              payerEmail,
              payerName,
            }
          )
          .then(async (response) => {
            if (response.data !== null) {
              const payment = Payment({
                payment_id: response.data.payment_id,
                resource_token: response.data.resource_token,
                return_uri: response.data.return_uri,
                debugMode: true,
                production: true,
                appearance: {
                  font: "DM Sans",
                  defaultColor: "#808080",
                  spinner: { color: "#808080" },
                  illustration: { color: "#808080" },
                  listOption: { selected: { background: "#F9D3C0" } },
                  button: {
                    default: { background: "#F9D3C0" },
                    disabled: { color: "#F9D3C0" },
                    hover: { background: "#F9D3C0" },
                    focus: {
                      border: {
                        color: "#FF00FF",
                        borderRadius: "50px",
                        width: "4px",
                      },
                    },
                  },
                  input: {
                    default: {
                      placeholder: {
                        color: "#808080",
                      },
                      label: {
                        color: "#808080",
                      },
                      icon: {
                        color: "#808080",
                      },
                      border: {
                        color: "#808080",
                        borderRadius: "100px",
                      },
                      color: "#000",
                      background: "#F7F7F7",
                    },
                  },
                },
                // mount the embedded payment page in the target element
                target: document.getElementById("target"),
                // remove the target element from the DOM after the payment is done
                onDone: () => {
                  const target = document.getElementById("target");
                  if (target) {
                    target.remove();
                  }
                },
                // remove the target element from the DOM if the user aborts the payment
                onAbort: () => {
                  const target = document.getElementById("target");
                  if (target) {
                    target.remove();
                  }

                  clearCookies();
                  window.location.reload();
                },
                // Error state
                onError: (error) => {
                  console.log("onError called", error);
                },
              });

              payment.start();
            } else {
              setError(true);
              setActiveStep(activeStep - 1);
            }
          })
          .catch((error) => {
            setError(true);
            setActiveStep(activeStep - 1);
          });
      } catch {
        setError(true);
        setActiveStep(activeStep - 1);
      }
    };
    generateEmbeddedPayment();
  }, []);

  return (
    <FormWrapper>
      <FrameTarget id="target" scroll="no" />
      {error ? <ErrorMsg errorText={"Payment error."} /> : <p></p>}
    </FormWrapper>
  );
}

// Styled Components
const FrameTarget = styled.section`
  padding: 0px;
  height: 600px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 500px) {
    margin: -15px -40px;
    width: 100vw;
    height: 80vh;
  }
`;
