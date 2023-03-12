import React from "react";
import Nav from "./Nav";
import reducer from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { setAuthedUser } from "../actions/authedUser";
import { handleInitialData } from "../actions/shared";

const store = createStore(reducer, middleware);

describe("Nav", () => {
  it("renders the Nav component completely and correctly", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
  it("should display the DarkMode button if logged-in", async () => {
    await store.dispatch(handleInitialData());
    store.dispatch(setAuthedUser("zoshikanlu"));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    expect(component.queryByTestId("dark-btn")).toBeInTheDocument();
  });
  it("should display the DarkMode button if logged-in", async () => {
    await store.dispatch(handleInitialData());
    store.dispatch(setAuthedUser("zoshikanlu"));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(component.getByTestId("dark-btn"));
    expect(component.getByTestId("dark-btn").getAttribute("value")).toEqual(
      "dark"
    );
  });
});
