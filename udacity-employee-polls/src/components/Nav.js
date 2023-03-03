import React from "react";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function Nav(props) {
  console.log(props.avatarURL);
  return (
    <Box>
      <Flex alignItems={"center"} p={"2rem"} justifyContent={"space-between"}>
        <Flex gap={"2rem"}>
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/new">New</Link>
        </Flex>
        <Flex alignItems={"center"} gap={"2rem"}>
          <Flex alignItems={"center"} gap={"1rem"}>
            <Image src={props.avatarURL} w={"50px"} h={"50px"} />
            <Text>{props.loggedInUser}</Text>
          </Flex>
          <Link to="/login">
            <Button
              colorScheme={""}
              gap={"0.4rem"}
              onClick={() => {
                props.dispatch(setAuthedUser(""));
              }}
              backgroundColor={"black"}
              color={"white"}
            >
              Logout
              <IoLogOutOutline fontSize={"1.3rem"} />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

const mapStateToProps = ({ authedUser, users }) => ({
  loggedInUser: authedUser,
  avatarURL:
    authedUser !== null
      ? Object.values(users).find((users) => users.id === authedUser).avatarURL
      : null,
});

export default connect(mapStateToProps)(Nav);
