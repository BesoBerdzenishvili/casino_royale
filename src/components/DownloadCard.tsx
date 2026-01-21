import styled from "styled-components";
import casinoLogo from "../assets/casino_royale.png";
import Button from "../common/Button";

const DashedBorder = styled.div`
  width: 390px;
  padding: 30px 32px;
  margin: 0 40px;

  background: radial-gradient(
    120% 120% at 50% 0%,
    #1b1f4a 0%,
    #0b0d2a 60%,
    #06071a 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  inset: 12px;
  border-radius: 16px;
  border: 2px dashed rgba(255, 184, 90, 0.6);
`;

const Logo = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 28px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    min-width: 220px;
  }
`;

export const DownloadCard = () => {
  return (
    <DashedBorder>
      <Logo src={casinoLogo} alt="Casino Royale" />

      <Title>Download Casino</Title>
      <Subtitle>Play Min anywhere, anytime</Subtitle>

      <ButtonWrapper>
        <Button install />
      </ButtonWrapper>
    </DashedBorder>
  );
};
