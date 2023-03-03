import { Box, Text, Flex, Divider, SimpleGrid } from "@chakra-ui/react";
import Nav from "./Nav";
import React from "react";
import { connect } from "react-redux";
import Poll from "./Poll";
function Home(props) {
  const doneFilteredQuestions = props.hasDone.reduce(
    (object, key) => Object.assign(object, { [key.qId]: key.status }),
    {}
  );
  return (
    <>
      <Nav />

      <Box w={"70%"} margin={"auto"}>
        <Flex gap={"2rem"} flexDir={"column"}>
          <Box
            border={"1px solid "}
            textAlign={"center"}
            borderColor={"#d3d3d3"}
            rounded={"10px"}
            overflow={"hidden"}
          >
            <Text my={"0.5rem"} fontSize={"3xl"} fontWeight={"bold"}>
              New Questions
            </Text>
            <Divider mb={"1rem"} />
            <SimpleGrid
              gap={"5"}
              padding={"1rem"}
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            >
              {props.questionId.map((id) => {
                const hasDone = doneFilteredQuestions[id];
                if (!hasDone) {
                  return <Poll key={id} id={id} />;
                }
              })}
            </SimpleGrid>
          </Box>
          <Box
            border={"1px solid "}
            textAlign={"center"}
            borderColor={"#d3d3d3"}
            rounded={"10px"}
            overflow={"hidden"}
          >
            <Text my={"0.5rem"} fontSize={"3xl"} fontWeight={"bold"}>
              Done
            </Text>
            <Divider mb={"1rem"} />
            <SimpleGrid
              gap={"5"}
              padding={"1rem"}
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            >
              {props.questionId.map((id) => {
                const hasDone = doneFilteredQuestions[id];
                if (hasDone) {
                  return <Poll key={id} id={id} />;
                }
              })}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questionId: Object.keys(questions).sort((a, b) => {
      return questions[b].timestamp - questions[a].timestamp;
    }),
    hasDone: Object.values(questions).map((eachQuestion) => {
      if (
        eachQuestion.optionOne.votes.includes(authedUser) ||
        eachQuestion.optionTwo.votes.includes(authedUser)
      ) {
        return { qId: eachQuestion.id, status: true };
      } else {
        return { qId: eachQuestion.id, status: false };
      }
    }),
  };
}

export default connect(mapStateToProps)(Home);
