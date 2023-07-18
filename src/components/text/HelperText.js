import React from "react";
import styled from "styled-components";

export default function HelperText({ text, ...props }) {
  return <Text>{text}</Text>;
}

const Text = styled.p`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  color: #808080;
`;
