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
  Badge,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { formatDate } from "../utils/helper";
import { IoChevronForwardOutline } from "react-icons/io5";
function Poll(props) {
  const { name, timestamp, id, hasAnswered, avatar } = props.question;

  if (props.question === null) {
    return <h1>This question doesnt exist</h1>;
  }

  return (
    <Card pos={"relative"}>
      <Badge
        ml="1"
        w={"fit-content"}
        pos={"absolute"}
        top={"10px"}
        left={"10px"}
        colorScheme={hasAnswered ? "yellow" : "green"}
      >
        {hasAnswered ? "Done" : "New"}
      </Badge>
      <CardHeader>
        <Image w={"100px"} m={"auto"} src={avatar} />
        <Heading size="md"> {name}</Heading>
        <Text fontWeight={"thin"}>{formatDate(timestamp)}</Text>
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
