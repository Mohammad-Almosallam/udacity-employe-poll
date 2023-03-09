import React, { useState } from "react";
import Nav from "./Nav";
import {
  InputLeftAddon,
  Input,
  InputGroup,
  Button,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { handleSubmitNewQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

function NewPoll(props) {
  const navigate = useNavigate();
  const [optionOneChoice, setOptionOneChoice] = useState();
  const [optionTwoChoice, setOptionTwoChoice] = useState();

  function handleSubmitBtn(e) {
    e.preventDefault();
    props
      .dispatch(
        handleSubmitNewQuestion({
          author: props.authedUser,
          optionOneText: optionOneChoice,
          optionTwoText: optionTwoChoice,
        })
      )
      .then(() => {
        navigate("/");
      });
  }

  return (
    <>
      <Nav />
      <Flex
        alignItems={"center"}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Flex w="70%" pos={"relative"} alignItems={"center"} flexDir={"column"}>
          <Box>
            <Text fontSize={"5xl"} mt={"6rem"} fontWeight={"bold"}>
              ✨What question you want to ask?✨
            </Text>
          </Box>
          <Box>
            <Text fontSize={"4xl"} mt={"2rem"} fontWeight={"thin"}>
              Would you rather...
            </Text>
          </Box>
          <Flex w={"100%"} mt={"2rem"} gap={"1rem"}>
            <Flex w={"100%"} flexDir={"column"} gap={".5rem"}>
              <InputGroup size="md">
                <InputLeftAddon children="A" />
                <Input
                  placeholder="Enter the first choice"
                  type={"text"}
                  onChange={(e) => {
                    setOptionOneChoice(e.target.value);
                  }}
                  fontSize={"1.2rem"}
                />
              </InputGroup>
            </Flex>
            <Flex w={"100%"} flexDir={"column"} gap={".5rem"}>
              <InputGroup size="md">
                <InputLeftAddon children="B" />
                <Input
                  placeholder="Enter the second choice"
                  type={"text"}
                  onChange={(e) => {
                    setOptionTwoChoice(e.target.value);
                  }}
                  fontSize={"1.2rem"}
                />
              </InputGroup>
            </Flex>
          </Flex>
          <Button
            colorScheme={"facebook"}
            onClick={(e) => {
              handleSubmitBtn(e);
            }}
            mt={"4rem"}
            w={"50%"}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewPoll);
