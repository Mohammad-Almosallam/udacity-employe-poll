import React from "react";
import { Flex, Box, Text, Button, Image, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  IoLogOutOutline,
  IoSunnyOutline,
  IoMoonOutline,
} from "react-icons/io5";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function Nav(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex alignItems={"center"} p={"2rem"} justifyContent={"space-between"}>
        <Flex gap={"2rem"}>
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/add">New</Link>
        </Flex>
        <Flex alignItems={"center"} gap={"2rem"}>
          <Flex alignItems={"center"} gap={"1rem"}>
            <Image src={props.avatarURL} w={"50px"} h={"50px"} />
            <Text>{props.loggedInUser}</Text>
          </Flex>
          <Button
            bg={"transparent"}
            borderRadius={"50%"}
            width="40px"
            p={0}
            _hover={{ backgroud: "transparent" }}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
          </Button>
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
