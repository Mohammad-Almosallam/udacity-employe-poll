import {
  InputLeftAddon,
  Input,
  InputGroup,
  Image,
  Button,
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";
import { withRouter, formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
function PollPage(props) {
  function calcPercentage(numOfVotes) {
    const numOptionOneVotes = props.question.optionOne.votes.length;
    const numOptionTwoVotes = props.question.optionTwo.votes.length;

    const total = numOptionOneVotes + numOptionTwoVotes;

    return Math.floor((numOfVotes / total) * 100);
  }
  return (
    <>
      <Nav />
      <Flex
        alignItems={"center"}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Flex w="70%" alignItems={"center"} flexDir={"column"}>
          <Box>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              {props.question.name} asks
            </Text>
          </Box>
          <Box mt={"1.5rem"}>
            <Image src={props.question.avatar} />
          </Box>
          <Flex w={"100%"} mt={"3rem"} gap={"1rem"}>
            <Flex w={"100%"} flexDir={"column"} gap={".5rem"}>
              <InputGroup size="md">
                <InputLeftAddon children="A" />
                <Input
                  disabled
                  placeholder="mysite"
                  value={props.question.optionOne.text}
                  color={"black"}
                  fontSize={"1.2rem"}
                />
              </InputGroup>
              <Button
                isDisabled={props.question.hasAnswered}
                colorScheme={"facebook"}
                w={"100%"}
              >
                Choose A
              </Button>
            </Flex>
            <Flex w={"100%"} flexDir={"column"} gap={".5rem"}>
              <InputGroup size="md">
                <InputLeftAddon children="B" />
                <Input
                  disabled
                  placeholder="mysite"
                  value={props.question.optionTwo.text}
                  color={"black"}
                  fontSize={"1.2rem"}
                />
              </InputGroup>
              <Button
                isDisabled={props.question.hasAnswered}
                colorScheme={"facebook"}
                w={"100%"}
              >
                Choose B
              </Button>
            </Flex>
          </Flex>
          {props.question.hasAnswered && (
            <Flex w={"100%"} mt={"3rem"}>
              <StatGroup w={"inherit"}>
                <Stat>
                  <StatLabel fontSize={"1rem"}>Number of votes</StatLabel>
                  <StatNumber fontSize={"3rem"}>
                    {props.question.optionOne.votes.length}
                  </StatNumber>
                  <StatHelpText fontSize={"1.2rem"} pl={"0.7rem"}>
                    {calcPercentage(props.question.optionOne.votes.length) +
                      "%"}
                  </StatHelpText>
                </Stat>

                <Stat>
                  <StatLabel fontSize={"1rem"}>Number of votes</StatLabel>
                  <StatNumber fontSize={"3rem"}>
                    {props.question.optionTwo.votes.length}
                  </StatNumber>
                  <StatHelpText fontSize={"1.2rem"} pl={"0.7rem"}>
                    {calcPercentage(props.question.optionTwo.votes.length) +
                      "%"}
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];
  return {
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};
export default withRouter(connect(mapStateToProps)(PollPage));
