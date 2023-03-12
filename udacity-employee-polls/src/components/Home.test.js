import React from "react";
import Home from "./Home";
import Poll from "./Poll";
import PollPage from "./PollPage";
import reducer from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { setAuthedUser } from "../actions/authedUser";
import { handleInitialData } from "../actions/shared";

const store = createStore(reducer, middleware);

describe("Home", () => {
  it("renders the Home component completely and correctly", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
