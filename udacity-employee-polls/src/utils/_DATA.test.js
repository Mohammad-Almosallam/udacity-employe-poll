import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

// ------------------------TESTING 1----------------------------
describe("_saveQuestion", () => {
  it("will return the formatted question if the inputs are correct", async () => {
    const newQuestions = {
      author: "zoshikanlu",
      optionOneText: "Dunkin Donuts",
      optionTwoText: "Starbucks",
    };

    const result = await _saveQuestion(newQuestions);
    expect(result.optionOne.text).toEqual("Dunkin Donuts");
    expect(result.optionTwo.text).toEqual("Starbucks");
    expect(result.author).toEqual("zoshikanlu");
  });

  it("will return error if the either inputs are empty", async () => {
    const newQuestions = {
      author: "zoshikanlu",
      optionOneText: "",
      optionTwoText: "Starbucks",
    };
    await expect(_saveQuestion(newQuestions)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

// ------------------------TESTING 2----------------------------
describe("_saveQuestionAnswer", () => {
  it("will return true if the given inputs are correctly passed ", async () => {
    const questionAnswer = {
      authedUser: "zoshikanlu",
      qid: "6ni6ok3ym7mf1p33lnez",
      answer: "optionOne",
    };

    const result = await _saveQuestionAnswer(questionAnswer);
    expect(result).toEqual(true);
  });

  it("will return error if the either inputs are empty", async () => {
    const questionAnswer = {
      authedUser: "zoshikanlu",
      qid: "",
      answer: "hire more frontend developers",
    };

    await expect(_saveQuestionAnswer(questionAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
