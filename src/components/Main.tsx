import styled from "styled-components";
import bgImage from "../assets/bg_big.png";

const Container = styled.main`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export default function Main() {
  return <Container></Container>;
}
