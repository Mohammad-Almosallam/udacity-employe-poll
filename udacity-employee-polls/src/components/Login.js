import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Button,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

function Login(props) {
  //   const [userSelected, setUserSelected] = useState("");
  const navigate = useNavigate();

  function setUser(userId) {
    props.dispatch(setAuthedUser(userId));
    navigate("/");
  }
  return (
    <Flex
      alignItems={"center"}
      h={"100vh"}
      textAlign={"center"}
      justifyContent={"center"}
    >
      <Flex flexDir={"column"}>
        <Box>
          <Text fontSize={"9xl"} fontWeight={"bold"}>
            LOGIN IN
          </Text>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} w={"60%"} rightIcon={<IoChevronDown />}>
              Users
            </MenuButton>
            <MenuList w={"60%"}>
              {Object.values(props.allUsers).map((eachUser) => {
                return (
                  <MenuItem
                    onClick={() => {
                      setUser(eachUser.id);
                    }}
                    minH="48px"
                  >
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src={eachUser.avatarURL}
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <span>{eachUser.name}</span>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
}

function mapStateToProps({ users }) {
  return {
    allUsers: users,
  };
}

export default connect(mapStateToProps)(Login);
