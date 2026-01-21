import styled from "styled-components";
import bgImage from "../assets/bg_big.png";
import seven from "../assets/seven.png";
import casinoLogo from "../assets/casino_royale.png";
import Button from "../common/Button";

const Container = styled.main`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Main() {
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
        <Button />
      </StyledContainer>
    </Container>
  );
}
