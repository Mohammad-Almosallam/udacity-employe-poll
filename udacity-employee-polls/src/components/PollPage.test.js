import React from "react";
import PollPage from "./PollPage";
import reducer from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";

const store = createStore(reducer, middleware);

describe("PollPage", () => {
  it("renders the PollPage component completely and correctly", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollPage />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
  it("will have all expected fields", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollPage />
        </BrowserRouter>
      </Provider>
    );
    const optionOneInput = component.getByTestId("optionOneInput");
    const optionTwoInput = component.getByTestId("optionTwoInput");
    expect(optionOneInput).toBeInTheDocument();
    expect(optionTwoInput).toBeInTheDocument();

    const submitButtonA = component.getByText("Choose A");
    const submitButtonB = component.getByText("Choose B");
    expect(submitButtonA).toBeInTheDocument();
    expect(submitButtonB).toBeInTheDocument();
  });
});
