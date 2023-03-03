import React from "react";
import Nav from "./Nav";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Image,
} from "@chakra-ui/react";
import { connect } from "react-redux";
function Leaderboard(props) {
  console.log(props);
  return (
    <>
      <Nav />
      <Box mt={"3rem"} w={"80%"} mx={"auto"}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Employee</Th>
                <Th isNumeric>Answered</Th>
                <Th isNumeric>Created</Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.rankOrderIds.map((id, index) => {
                return (
                  <Tr key={index}>
                    <Td
                      display={"flex"}
                      fontWeight={"bold"}
                      alignItems="center"
                    >
                      <Image w={"40px"} src={props.users[id].avatarURL} />{" "}
                      {props.users[id].name}
                    </Td>
                    <Td isNumeric>
                      {Object.keys(props.users[id].answers).length}
                    </Td>
                    <Td isNumeric>{props.users[id].questions.length}</Td>
                  </Tr>
                );
              })}
            </Tbody>

            <TableCaption>Made with ❤️ by Mohammad Almosallam</TableCaption>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

const mapStateToProps = ({ users }) => {
  return {
    rankOrderIds: Object.keys(users).sort((a, b) => {
      return (
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[b].questions.length)
      );
    }),
    users,
  };
};

export default connect(mapStateToProps)(Leaderboard);
