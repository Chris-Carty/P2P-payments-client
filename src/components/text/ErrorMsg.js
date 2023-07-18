import React from "react";
import styled from "styled-components";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";

export default function ErrorMsg({ errorText }) {
  return (
    <ErrorWrap>
      <ErrorOutlinedIcon sx={{ marginRight: 0.5 }} fontSize="small" />
      {errorText}
    </ErrorWrap>
  );
}

const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  color: red;
  margin: 0;
`;
