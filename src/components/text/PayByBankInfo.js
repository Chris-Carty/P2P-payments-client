import React from "react";
import styled from "styled-components";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

export default function PayByBankInfo({ merchantName }) {
  return (
    <InfoWrap>
      <BulletWrap>
        <LooksOneIcon style={{ color: "#000", fontSize: 18 }} />
        <Text> We'll redirect you to your online banking app or website</Text>
      </BulletWrap>
      <BulletWrap>
        <LooksTwoIcon style={{ color: "#000", fontSize: 18 }} />
        <Text> Log in to your online banking and authorise the payment</Text>
      </BulletWrap>
      <BulletWrap>
        <Looks3Icon style={{ color: "#000", fontSize: 18 }} />
        <Text>You'll then be redirected back to {merchantName}</Text>
      </BulletWrap>
    </InfoWrap>
  );
}

const InfoWrap = styled.section`
  display: flex;
  flex-direction: column;
`;

const BulletWrap = styled.section`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 5px 0px 5px 20px;
`;
