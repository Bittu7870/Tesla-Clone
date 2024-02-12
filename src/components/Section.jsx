import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import DownArrow from "../assets/images/down-arrow.svg";

const Section = ({ title, description, leftbtn, rightbtn, backgroundImg }) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade direction="left">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade direction="left">
          <ButtonGroup>
            <LeftButton>{leftbtn}</LeftButton>
            {rightbtn && <RightButton>{rightbtn}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrowImg src={DownArrow} alt="Down Arrow" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bgImage})`};
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  color: #ffffff;
  background: #171a20;
  opacity: 80%;
  border-radius: 4px;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 0.5rem;
`;

const RightButton = styled(LeftButton)`
  color: #393c41;
  background: #f4f4f4;
`;

const DownArrowImg = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
