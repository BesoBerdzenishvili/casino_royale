import React from "react";
import { Button as MUIButton } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import download from "../assets/download.png";

interface Props {
  install?: boolean;
  onClick?: () => void;
}

const StyledButton = styled(MUIButton)<{
  install?: boolean;
  $isNonEnglish?: boolean;
}>`
  && {
    width: ${({ install }) => (install ? "250px" : "358.5px")};
    height: 56px;
    border-radius: 12px;
    opacity: 1;
    padding: ${({ install }) => (install ? "8px 24px" : "20px 24px")};
    gap: 8px;
    background: ${({ $isNonEnglish }) =>
      $isNonEnglish
        ? "linear-gradient(84.38deg, #5577FF 7.59%, #ffba47 96.71%)"
        : "linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%)"};
    color: #fff;
    font-weight: 600;
    text-transform: none;
    font-size: 16px;
    box-shadow: none;

    &:hover {
      background: ${({ $isNonEnglish }) =>
        $isNonEnglish
          ? "linear-gradient(84.38deg, #5577FF 7.59%, #ffba47 96.71%)"
          : "linear-gradient(84.38deg, #ff7a55 7.59%, #ffa733 96.71%)"};
    }
  }
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Button: React.FC<Props> = ({ install = false, onClick }) => {
  const { t, i18n } = useTranslation();
  const isNonEnglish = i18n.language !== "en";

  return (
    <StyledButton
      variant="contained"
      install={install}
      onClick={onClick}
      $isNonEnglish={isNonEnglish}
    >
      {install ? (
        <StyledSpan>
          <img src={download} alt="download" />
          {t("main.installApp")}
        </StyledSpan>
      ) : (
        t("main.openGame")
      )}
    </StyledButton>
  );
};

export default Button;
