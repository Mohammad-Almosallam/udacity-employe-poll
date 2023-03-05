import React from "react";
import gradient from "../assets/gradient.jpg";
import gradient2 from "../assets/gradient2.jpg";
import { Image } from "@chakra-ui/react";
function Gradient() {
  return (
    <>
      <Image
        borderRadius={"50% 42% 22% 80%"}
        filter={"blur(40px)"}
        left={"-200"}
        pos={"fixed"}
        w={"100%"}
        opacity={"50%"}
        zIndex={"-3"}
        src={gradient}
      />
      <Image
        borderRadius={"50% 42% 22% 80%"}
        filter={"blur(100px)"}
        pos={"fixed"}
        opacity={"70%"}
        w={"80%"}
        zIndex={"-3"}
        src={gradient2}
      />
    </>
  );
}

export default Gradient;
