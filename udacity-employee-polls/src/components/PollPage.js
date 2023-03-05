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
  StatGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";
import { withRouter, formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import { handleSubmitQuestionAnswer } from "../actions/questions";
function PollPage(props) {
  const { name, hasAnswered, avatar, optionOne, optionTwo } = props.question;

  function calcPercentage(numOfVotes) {
    const numOptionOneVotes = optionOne.votes.length;
    const numOptionTwoVotes = optionTwo.votes.length;

    const total = numOptionOneVotes + numOptionTwoVotes;

    return Math.floor((numOfVotes / total) * 100);
  }

  function handleBtnSubmit(e, answerValue) {
    e.preventDefault();
    const { authedUser, dispatch, question } = props;
    console.log(authedUser, question.id, answerValue);
    dispatch(
      handleSubmitQuestionAnswer({
        authedUser: authedUser,
        qid: question.id,
        answer: answerValue,
      })
    );
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
            <Image w={"200px"} m={"auto"} src={avatar} />
          </Box>
          <Box>
            <Text fontSize={"4xl"} fontWeight={"thin"}>
              {name} asks
            </Text>
          </Box>
          <Box>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              Would you rather...
            </Text>
          </Box>
          <Flex w={"100%"} mt={"3rem"} gap={"1rem"}>
            <Flex w={"100%"} flexDir={"column"} gap={".5rem"}>
              <InputGroup size="md">
                <InputLeftAddon children="A" />
                <Input
                  disabled
                  placeholder="mysite"
                  value={optionOne.text}
                  fontSize={"1.2rem"}
                />
              </InputGroup>
              <Button
                isDisabled={hasAnswered}
                onClick={(e) => {
                  handleBtnSubmit(e, "optionOne");
                }}
                colorScheme={
                  optionOne.votes.includes(props.authedUser)
                    ? "green"
                    : "facebook"
                }
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
                  value={optionTwo.text}
                  fontSize={"1.2rem"}
                />
              </InputGroup>
              <Button
                isDisabled={hasAnswered}
                onClick={(e) => {
                  handleBtnSubmit(e, "optionTwo");
                }}
                colorScheme={
                  optionTwo.votes.includes(props.authedUser)
                    ? "green"
                    : "facebook"
                }
                w={"100%"}
              >
                Choose B
              </Button>
            </Flex>
          </Flex>
          {hasAnswered && (
            <Flex w={"100%"} mt={"3rem"}>
              <StatGroup w={"inherit"}>
                <Stat>
                  <StatLabel fontSize={"1rem"}>Number of votes</StatLabel>
                  <StatNumber fontWeight={"extrabold"} fontSize={"3rem"}>
                    {optionOne.votes.length}
                  </StatNumber>
                  <StatHelpText fontSize={"1.2rem"} pl={"0.7rem"}>
                    {calcPercentage(optionOne.votes.length) + "%"}
                  </StatHelpText>
                </Stat>

                <Stat>
                  <StatLabel fontSize={"1rem"}>Number of votes</StatLabel>
                  <StatNumber fontWeight={"extrabold"} fontSize={"3rem"}>
                    {optionTwo.votes.length}
                  </StatNumber>
                  <StatHelpText fontSize={"1.2rem"} pl={"0.7rem"}>
                    {calcPercentage(optionTwo.votes.length) + "%"}
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
    authedUser,
  };
};
export default withRouter(connect(mapStateToProps)(PollPage));
