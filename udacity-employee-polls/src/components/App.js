import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import PollPage from "./PollPage";
import ErrorPage from "./ErrorPage";
import Nav from "./Nav";
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <ChakraProvider>
        <LoadingBar />
        <Nav />
        <Box>
          {props.loading === true ? null : (
            <Box>
              {props.authedUser === "" ? (
                <Login />
              ) : (
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/questions/:id" element={<PollPage />} />
                  <Route path="/add" element={<NewPoll />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/error404" element={<ErrorPage />} />
                </Routes>
              )}
            </Box>
          )}
        </Box>
      </ChakraProvider>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
  authedUser,
});

export default connect(mapStateToProps)(App);
