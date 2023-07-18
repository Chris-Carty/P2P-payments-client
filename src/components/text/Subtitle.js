import React from "react";
import styled from "styled-components";

export default function Subtitle({ text, children }) {
  return (
    <SubtitleWrapper>
      {children}
      {text}
    </SubtitleWrapper>
  );
}

const SubtitleWrapper = styled.h3`
  font-weight: 400;
  display: flex;
  font-size: 24px;
  justify-content: center;
  color: #808080;
  margin: 0;
`;
