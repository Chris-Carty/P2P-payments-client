import React from "react";
import styled from "styled-components";

export default function TsAndCs({ ...props }) {
  const EndUserTerms = <Link href="XXX">Terms and Conditions</Link>;

  const PrivacyPolicy = <Link href="XXX">Privacy Policy</Link>;

  return (
    <TersmWrapper>
      <Text>
        By using the service, you agree to Gift {EndUserTerms} and{" "}
        {PrivacyPolicy}.
      </Text>
    </TersmWrapper>
  );
}

// Styled Components
const TersmWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -30px;
  font-weight: 200;
`;

const Text = styled.p`
  font-size: 16px;
  color: #808080;
`;

const Link = styled.a`
  color: #808080;

  :link {
    color: #808080;
  }

  :visited {
    color: #808080;
  }
`;
