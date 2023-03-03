import React from "react";
import { formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Text,
  Card,
  CardHeader,
  Box,
  CardFooter,
  Button,
  Heading,
} from "@chakra-ui/react";
import { formatDate } from "../utils/helper";
import { IoChevronForwardOutline } from "react-icons/io5";
function Poll(props) {
  console.log(props);
  const { name, timestamp, id } = props.question;

  if (props.question === null) {
    return <h1>This question doesnt exist</h1>;
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md"> {name}</Heading>
        <Text>{formatDate(timestamp)}</Text>
      </CardHeader>
      <CardFooter>
        <Box w={"100%"}>
          <Link to={`/questions/${id}`}>
            <Button w={"100%"} display={"flex"} colorScheme={"teal"}>
              Show
              <IoChevronForwardOutline />
            </Button>
          </Link>
        </Box>
      </CardFooter>
    </Card>
  );
}
const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};

export default connect(mapStateToProps)(Poll);
