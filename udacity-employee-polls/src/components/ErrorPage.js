import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ErrorPage(props) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Box textAlign={"center"}>
        <Text fontSize={"8xl"} fontWeight={"hairline"}>
          404
        </Text>
        <Text fontSize={"8xl"} fontWeight={"hairline"}>
          ERROR
        </Text>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Hello {props.user},
        </Text>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          This page doesnt exist. Please press the button to go back.
        </Text>
        <Link to={"/"}>
          <Button mt={"10"}>Back to Home</Button>
        </Link>
      </Box>
    </Box>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({
  user: Object.values(users).find((user) => user.id === authedUser).name,
});

export default connect(mapStateToProps)(ErrorPage);
