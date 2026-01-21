import React from "react";
import { Button as MUIButton } from "@mui/material";
import styled from "styled-components";
import download from "../assets/download.png";

interface Props {
  install?: boolean;
  onClick?: () => void;
}

const StyledButton = styled(MUIButton)<{ install?: boolean }>`
  && {
    width: ${({ install }) => (install ? "250px" : "358.5px")};
    height: 56px;
    border-radius: 12px;
    opacity: 1;
    padding: ${({ install }) => (install ? "8px 24px" : "20px 24px")};
    gap: 8px;
    background: linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%);
    color: #fff;
    font-weight: 600;
    text-transform: none;
    font-size: 16px;
    box-shadow: none;

    &:hover {
      background: linear-gradient(84.38deg, #ff7a55 7.59%, #ffa733 96.71%);
    }
  }
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

const Button: React.FC<Props> = ({ install = false, onClick }) => {
  return (
    <StyledButton variant="contained" install={install} onClick={onClick}>
      {install ? (
        <StyledSpan>
          <img src={download} alt="download" /> "Install App"
        </StyledSpan>
      ) : (
        "OPEN THE GAME"
      )}
    </StyledButton>
  );
};

export default Button;
