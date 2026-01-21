import React from "react";
import styled from "styled-components";
import { Instagram, Telegram, X, Email } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 1200px) {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  color: #9ca3af;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

const IconButton = styled.a`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const InstagramButton = styled(IconButton)`
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
`;

const TelegramButton = styled(IconButton)`
  background: #229ed9;
`;

const XButton = styled(IconButton)`
  background: #000;
`;

const EmailButton = styled(IconButton)`
  background: #000;
`;

const SocialMediaIcons: React.FC = () => {
  return (
    <Container>
      <Title>Us on social media:</Title>
      <IconsWrapper>
        <InstagramButton href="#" aria-label="Instagram">
          <Instagram sx={{ fontSize: 32, color: "white" }} />
        </InstagramButton>
        <TelegramButton href="#" aria-label="Telegram">
          <Telegram sx={{ fontSize: 32, color: "white" }} />
        </TelegramButton>
        <XButton href="#" aria-label="X">
          <X sx={{ fontSize: 32, color: "white" }} />
        </XButton>
        <EmailButton href="#" aria-label="Email">
          <Email sx={{ fontSize: 32, color: "white" }} />
        </EmailButton>
      </IconsWrapper>
    </Container>
  );
};

export default SocialMediaIcons;
