import React from "react";
import Home from "./Home";
import reducer from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";

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
