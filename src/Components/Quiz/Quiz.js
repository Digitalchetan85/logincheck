import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { QuizContext } from "../../Contexts/Context";
import Question from "./Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  // console.log("quizState", quizState);
  return (
    <div>
      <Container className="pt-5 pb-5">
        {quizState.showResults && (
          <div>
            <Container>
              <Row className="justify-content-center">
                <Col md={8}>
                  <div className="alert alert-success p-3 text-center">
                    <h2>Congratulations!</h2>

                    <h3>You've completed the Quiz.</h3>

                    <h4>
                      You've got {quizState.correctAnswerCount} of{" "}
                      {quizState.questions.length} are correct.
                    </h4>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center pt-4 pb-4">
                <Col md={4}>
                  <div className="text-center">
                    <Button
                      className="btn btn-dark text-uppercase"
                      onClick={() => dispatch({ type: "RESTART" })}
                    >
                      Restart
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {!quizState.showResults && (
          <div className="">
            <Row className="justify-content-center">
              <Col md={6}>
                <div className="p-3 bg-primary text-center">
                  <h2 className="pt-2 pb-2 text-white">
                    Question {quizState.currentQuestionIndex + 1}/
                    {quizState.questions.length}
                  </h2>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center pt-4 pb-4">
              <Col md={10}>
                <Question />
              </Col>
            </Row>
            <Row className="justify-content-center pt-4 pb-4">
              <Col md={4}>
                <div className="text-center">
                  <Button
                    className="btn btn-dark text-uppercase"
                    onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                  >
                    Next Question
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Quiz;
