import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Image,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  IoLogOutOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function Nav(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        alignItems={"center"}
        p={"2rem"}
        justifyContent={"space-between"}
      >
        <Flex gap={"2rem"}>
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/add">New</Link>
        </Flex>
        <Flex alignItems={"center"} gap={"2rem"}>
          {props.loggedInUser !== "" && (
            <Flex alignItems={"center"} gap={"1rem"}>
              <Image src={props.avatarURL} w={"50px"} h={"50px"} />
              <Text>{props.loggedInUser}</Text>
            </Flex>
          )}
          <Button
            bg={"transparent"}
            borderRadius={"50%"}
            data-testid="dark-btn"
            width="40px"
            p={0}
            _hover={{ backgroud: "transparent" }}
            onClick={toggleColorMode}
            value={colorMode === "light" ? "light" : "dark"}
          >
            {colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
          </Button>
          {props.loggedInUser !== "" && (
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
          )}
        </Flex>
      </Flex>

      <Flex
        display={{ base: "flex", md: "none" }}
        alignItems={"center"}
        p={"2rem"}
        justifyContent={"space-between"}
      >
        <Menu>
          <MenuButton as={Button} variant="outline">
            <IoMenuOutline />
          </MenuButton>
          <MenuList display={"block"} w={"100vw"}>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/leaderboard">Leaderboard</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/add">New</Link>
            </MenuItem>
            <MenuItem>
              {props.loggedInUser !== "" && (
                <Button
                  colorScheme={""}
                  gap={"0.4rem"}
                  onClick={() => {
                    props.dispatch(setAuthedUser(""));
                  }}
                  backgroundColor={"black"}
                  color={"white"}
                  w={"100%"}
                >
                  Logout
                  <IoLogOutOutline fontSize={"1.3rem"} />
                </Button>
              )}
            </MenuItem>
          </MenuList>
        </Menu>

        <Flex alignItems={"center"} gap={"0.3rem"}>
          <Button
            bg={"transparent"}
            borderRadius={"50%"}
            data-testid="dark-btn"
            width="40px"
            p={0}
            _hover={{ backgroud: "transparent" }}
            onClick={toggleColorMode}
            value={colorMode === "light" ? "light" : "dark"}
          >
            {colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
          </Button>
          {props.loggedInUser !== "" && (
            <Flex alignItems={"center"} gap={"1rem"}>
              <Image src={props.avatarURL} w={"50px"} h={"50px"} />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

const mapStateToProps = ({ authedUser, users }) => ({
  loggedInUser: authedUser,
  avatarURL:
    authedUser !== null && authedUser !== ""
      ? Object.values(users).find((users) => users.id === authedUser).avatarURL
      : null,
});

export default connect(mapStateToProps)(Nav);
