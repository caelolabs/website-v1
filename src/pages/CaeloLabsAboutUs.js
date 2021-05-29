import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/CaeloLabsFooter.js";
import MainFeature1 from "components/features/TwoColWithoutButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import OurCoreValues from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import LightBulbIcon from "images/lightbulb.svg";
import RocketIcon from "images/rocket.svg";
import HandshakeIcon from "images/handshake.svg";

import AboutImage from "images/about-image.png";
import VissityPreview from "images/vissity-preview.gif";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Us</Subheading>}
        heading="We are a creative technology and development studio."
        description="We provide visualization services and software solutions to the architecture, engineering, and construction (AEC) industry. Specializing in real-time 3D (RT3D) technology, we offer a number of services, including 3D animations, visualizations, interactive experiences, traffic and pedestrian simulation visualizations, and interactive 3D maps."
        imageSrc={AboutImage}
      />
      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="Create something stunning."
        description="Our mission is to provide an exceptional service experience through creative problem-solving and to deliver technology that inspires and empowers people around the globe."
        buttonRounded={false}
        imageSrc={VissityPreview}
        textOnLeft={false}
      />
      <OurCoreValues
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="We have three core values that we live and breathe every day at Caelo Labs."
        cards={[
          {
            imageSrc: LightBulbIcon,
            title: "Creativity",
            description: "Everyone has the freedom to innovate, and bold ideas are encouraged."
          },
          {
            imageSrc: RocketIcon,
            title: "Take on Challenges",
            description: "We are not afraid to take on challenges, and we support shoot-for-the-moon ambitions."
          },
          {
            imageSrc: HandshakeIcon,
            title: "Empower Success",
            description: "We succeed when our customers succeed, plain and simple."
          },
        ]}
        linkText=""
      />
      {/* <TeamCardGrid
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
