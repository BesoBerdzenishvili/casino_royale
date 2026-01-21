import { useState } from "react";
import styled from "styled-components";
import bgImage from "../assets/bg_big.png";
import seven from "../assets/seven.png";
import casinoLogo from "../assets/casino_royale.png";
import Button from "../common/Button";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const GameFrame = styled.iframe`
  width: 90vw;
  height: 90vh;
  border: none;
  border-radius: 8px;
  background: #000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 40px;
  height: 40px;

  font-size: 24px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Container = styled.main`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 456px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <StyledContainer>
        <img
          src={casinoLogo}
          alt="text 'casino royale' in golden letters"
          width={263}
          height={120}
        />
        <img src={seven} alt="three sevens" width={325} height={200} />
        <Button onClick={() => setIsOpen(true)} />
      </StyledContainer>
      {isOpen && (
        <Overlay>
          <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>

          <GameFrame
            src="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
            title="Game"
            allowFullScreen
          />
        </Overlay>
      )}
    </Container>
  );
}
