import React from "react";
import Nav from "./Nav";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
function Leaderboard() {
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
              <Tr>
                <Td>inches</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td isNumeric>0.91444</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>

            <TableCaption>Made with ❤️ by Mohammad Almosallam</TableCaption>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Leaderboard;
