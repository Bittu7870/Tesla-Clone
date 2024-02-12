import styled from "styled-components";
import Section from "./Section";
import Footer from "./Footer";
import modelSImage from "../assets/images/model-s.jpg";
import modelYImage from "../assets/images/model-y.jpg";
import model3Image from "../assets/images/model-3.jpg";
import modelXImage from "../assets/images/model-x.jpg";
import solarPanel from "../assets/images/solar-panel.jpg";
import solarRoof from "../assets/images/solar-roof.jpg";
import accessories from "../assets/images/accessories.jpg";

function Home() {
  return (
    <Container>
      <Section
        id="model-S"
        title="Model S"
        discription="Order online for Touchless Delivery"
        backgroundImg={modelSImage}
        leftbtn="custom order"
        rightbtn="existing inventory"
      />
      <Section
        id="model-Y"
        title="Model Y"
        discription="Order online for Touchless Delivery"
        backgroundImg={modelYImage}
        leftbtn="custom order"
        rightbtn="existing inventory"
      />
      <Section
        id="model-3"
        title="Model 3"
        discription="Order online for Touchless Delivery"
        backgroundImg={model3Image}
        leftbtn="custom order"
        rightbtn="existing inventory"
      />
      <Section
        id="model-X"
        title="Model X"
        discription="Order online for Touchless Delivery"
        backgroundImg={modelXImage}
        leftbtn="custom order"
        rightbtn="existing inventory"
      />
      <Section
        title="Lowest Cost Sloar Panels in America"
        discription="Money-back guarantee"
        backgroundImg={solarPanel}
        leftbtn="custom order"
        rightbtn="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        discription="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg={solarRoof}
        leftbtn="Order now"
        rightbtn="learn more"
      />
      <Section
        title="Accessories"
        discription=""
        backgroundImg={accessories}
        leftbtn="shop now"
      />
      <Footer />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
