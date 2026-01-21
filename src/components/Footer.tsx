import styled from "styled-components";
import man from "../assets/man.png";
import { DownloadCard } from "./DownloadCard";
import SocialMediaIcons from "./SocialMedia";
import CasinoInfo from "./CasinoInfo";
import LangSelector from "./LangSelector";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background: linear-gradient(270deg, #06225d 0%, #02011f 37.03%);
  padding: 60px 30px;

  @media (min-width: 1200px) {
    max-height: 415px;
    display: flex;
    flex-direction: row;
    align-items: initial;
    justify-content: space-between;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    height: 854px;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    height: 938px;
  }

  @media (max-width: 374px) {
    height: 938px;
  }
`;

const ContainerOne = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 1200px) {
    margin: 30px 0;
    height: 200px;
    align-items: center;
  }
`;

const StyledImage = styled.img`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 240px;
    height: 240px;
  }

  @media (min-width: 1920px) {
    width: 288px;
    height: 288px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <ContainerOne>
        <StyledImage src={man} alt="A man with cards in hand" />
        <DownloadCard />
        <CasinoInfo />
      </ContainerOne>

      <ContainerTwo>
        <LangSelector />
        <SocialMediaIcons />
      </ContainerTwo>

      <CasinoInfo second />
    </Container>
  );
};

export default Footer;
