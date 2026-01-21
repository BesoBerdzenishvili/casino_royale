import React from "react";
import styled from "styled-components";
import eightneen from "../assets/18.png";
import loho from "../assets/loho.png";

interface Props {
  second?: boolean;
}

const Container = styled.div<{ $second?: boolean }>`
  display: ${(p) => (p.$second ? "none" : "flex")};
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1200px) {
    display: ${(p) => (p.$second ? "flex" : "none")};
    flex-direction: row;
    gap: 2rem;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Icon = styled.img`
  width: 58px;
  height: 58px;
  flex-shrink: 0;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 1.125rem;
  margin: 0;
  max-width: 30ch;

  @media (min-width: 1200px) {
    width: 40ch;
  }
  line-height: 1.5;
`;

const CasinoInfo: React.FC<Props> = ({ second = false }) => {
  return (
    <Container $second={second}>
      <InfoBox>
        <Icon src={eightneen} alt="18+" />
        <Text>Only 18+</Text>
      </InfoBox>

      <InfoBox>
        <Icon src={loho} alt="Certified" />
        <Text>Casino is certified by the Anjouan Gaming Authority</Text>
      </InfoBox>
    </Container>
  );
};

export default CasinoInfo;
