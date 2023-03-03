import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import PollPage from "./PollPage";
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <ChakraProvider>
        <LoadingBar />
        <Box>
          {props.loading === true ? null : (
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <ProtectedRoute isAuthenticated={props.authedUser}>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions/:id"
                element={
                  <ProtectedRoute isAuthenticated={props.authedUser}>
                    <PollPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/new"
                element={
                  <ProtectedRoute isAuthenticated={props.authedUser}>
                    <NewPoll />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/leaderboard"
                element={
                  <ProtectedRoute isAuthenticated={props.authedUser}>
                    <Leaderboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          )}
        </Box>
      </ChakraProvider>
    </Fragment>
  );
};

const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = "/login",
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
  authedUser,
});
export default connect(mapStateToProps)(App);
